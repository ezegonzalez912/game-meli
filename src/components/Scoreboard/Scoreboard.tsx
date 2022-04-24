import { useState } from "react";
import { Filters } from "./Filters";
import { HeaderScoreboard } from "./HeaderScoreboard";
import { TableScore } from "./TableScore";

interface Props {
  setProducts: (products: any) => void;
}

export const Scoreboard: React.FC<Props> = ({ setProducts }) => {

  const [filters, setFilters] = useState<any>({
    country: "all",
    category: "all"
  });

  return (
    <div className="scoreboard game-card_container">
      <HeaderScoreboard setProducts={setProducts} />
      <Filters filters={filters} setFilters={setFilters} />
      <TableScore filters={filters} />
    </div>
  );
};
