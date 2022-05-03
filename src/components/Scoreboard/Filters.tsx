import { useCategories } from "../../hooks/useCategories";
import { useSite } from "../../hooks/useSite";
import { Category, Site } from "../../types/types";

interface Props {
   filters: any;
   setFilters: (filters: any) => void;
}

const namespace = "filters";

export const Filters:React.FC<Props> = ({
   filters,
   setFilters
}) => {

  const site = useSite();
  const categories = useCategories();

  return (
    <div className={`${namespace}-container`}>
      <p className={`${namespace}-title`}>Ordenar por:</p>
      <label className={`${namespace}-filter`}>
        Pais
        <select name="pais" onChange={(e) => setFilters({...filters, country: e.target.value})}>
        <option value="all">Todos</option>
          {site?.map((country: Site) => (
            <option key={country.id} value={country.id}>{country.name}</option>
          ))}
        </select>
      </label>
      <label className={`${namespace}-filter`}>
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
