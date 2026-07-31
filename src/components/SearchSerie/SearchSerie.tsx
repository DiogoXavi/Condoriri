import React from "react";
import { Root, SerieLabel, LabelContainer } from "./styles";
import type { SerieType } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface ISearchSerieProp {
  serie: SerieType;
  setSerie: (value: SerieType) => void;
}

const SearchSerie: React.FC<ISearchSerieProp> = ({
  serie,
  setSerie,
}) => {
  const navigate = useNavigate();
  return (
    <Root>
      <LabelContainer>
        <SerieLabel
          onClick={() => setSerie("all")}
          serie="all"
          selected={serie === "all"}
        >
          General
        </SerieLabel>
        <SerieLabel
          onClick={() => setSerie("A")}
          serie="A"
          selected={serie === "A"}
        >
          Serie A
        </SerieLabel>

        <SerieLabel
          onClick={() => setSerie("B")}
          serie="B"
          selected={serie === "B"}
        >
          Serie B
        </SerieLabel>
        <SerieLabel
          onClick={() => navigate("/playoffs")}
          serie="C"
          selected={serie === "C"}
        >
          Ver Octavos
        </SerieLabel>
      </LabelContainer>
    </Root>
  );
};

export default SearchSerie;