import { Category, Site } from "../../types/types";

interface Props {
  site: Site;
  categories: Category[];
}

export const DataGame:React.FC<Props> = ({ site, categories }) => {

  return (
    <section className="data_container">
      <p>{site.name}</p>
      {categories.map((category) => (
        <p key={category.id}>{category.name}</p>
      ))}
    </section>
  );
};
