import { useCategories } from "../../hooks/useCategories";
import { useSite } from "../../hooks/useSite";
import { Category, Site } from "../../types/types";

interface Props {
   filters: any;
   setFilters: (filters: any) => void;
}

export const Filters:React.FC<Props> = ({
   filters,
   setFilters
}) => {

  const site = useSite();
  const categories = useCategories();

  return (
    <div>
      <p>Filtrar por:</p>
      <label>
        Pais
        <select name="pais" onChange={(e) => setFilters({...filters, country: e.target.value})}>
        <option value="all">Todos</option>
          {site?.map((country: Site) => (
            <option key={country.id} value={country.id}>{country.name}</option>
          ))}
        </select>
      </label>
      <label>
        Categoria
        <select name="pais" onChange={(e) => setFilters({...filters, category: e.target.value})}>
        <option value="all">Todas</option>
          {categories?.map((category: Category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </label>
    </div>
  );
};
