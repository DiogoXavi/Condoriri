import React, { useState } from "react";
import {
  StandingsTable,
  Title,
  HeaderCategory,
  SearchSerie,
} from "../../components";
import logo from "../../assets/images/icons/logo1.png";

import { juvenil } from "../../constants/table/juvenil";
import { senior } from "../../constants/table/senior";
import { damas } from "../../constants/table/damas";
import { infantil } from "../../constants/table/infantil";

import { juvenil as fixtureJuvenil } from "../../constants/fixture/juvenil";
import { senior as fixtureSenior } from "../../constants/fixture/senior";
import { damas as fixtureDamas } from "../../constants/fixture/damas";
import { infantil as fixtureInfantil } from "../../constants/fixture/infantil";

import { categories } from "../../constants/categories";
import { orderTable } from "../../tools/tools";
import type { ITeamStanding, SerieType, CategoryType } from "../../types/types";
import { generateTable } from "../../utils/generateTable";
import { Root } from "./styles";

import { useNavigate } from "react-router-dom";


const Table: React.FC = () => {
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");

  const [serie, setSerie] = useState<SerieType>("all");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    (categoryParam as CategoryType) || "Juvenil",
  );

  const navigate = useNavigate();

  const handleCategoryChange = (cat: CategoryType) => {
    setSelectedCategory(cat);
    navigate(`/table?category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

const table = React.useMemo<ITeamStanding[]>(() => {
  switch (selectedCategory) {
    case "Juvenil":
      return orderTable(
        generateTable(fixtureJuvenil.filter(match => match.group < 25), juvenil)
      );

    case "Senior":
      return orderTable(
        generateTable(fixtureSenior, senior)
      );

    case "Damas":
      return orderTable(
        generateTable(fixtureDamas, damas)
      );

    case "Infantil":
      return orderTable(
        generateTable(fixtureInfantil, infantil)
      );

    default:
      return [];
  }
}, [selectedCategory]);

  const filterTableBySerie = (
    table: ITeamStanding[],
    serie: SerieType,
  ): ITeamStanding[] => {
    if (!serie || serie === "all") return table;

    return table.filter((team) => {
      if (!team.serie) return true;

      return team.serie === serie;
    });
  };

  const filteredTable = React.useMemo(() => {
    return filterTableBySerie(table, serie);
  }, [table, serie]);

  return (
    <Root>
      <HeaderCategory
        img={logo}
        color="#22b7be"
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <Title title={`Tabla de posiciones: ${selectedCategory}`} />
      {selectedCategory === "Juvenil" && (
        <SearchSerie serie={serie} setSerie={setSerie} />
      )}
      <StandingsTable category={selectedCategory} standings={filteredTable} />
    </Root>
  );
};

export default Table;
