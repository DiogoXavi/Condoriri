import React, { useEffect } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import { Root, RadioGroupContainer, SelectContainer } from "./styles";
import SearchSerie from "../SearchSerie/SearchSerie";
import FilterIcon from "@mui/icons-material/Filter";

import { juvenil } from "../../constants/teamCategories/juvenil";
import { senior } from "../../constants/teamCategories/senior";
import { damas } from "../../constants/teamCategories/damas";

import { getLogo } from "../../tools/tools";
import type { SerieType, ITeamCategoryItem } from "../../types/types";

interface ISearchBoxProps {
  stGame: string;
  selectedCategory: string;
  setStGame: (value: string) => void;
  team: string;
  setTeam: (value: string) => void;
  serie: SerieType;
  setSerie: React.Dispatch<React.SetStateAction<SerieType>>;
}

const SearchBox: React.FC<ISearchBoxProps> = ({
  stGame,
  selectedCategory,
  setStGame,
  team,
  setTeam,
  serie,
  setSerie,
}) => {
  const teamsSelected = (serie: SerieType, teams: ITeamCategoryItem[]) => {
    if (serie === "all") return teams;
    return teams.filter((t) => t.series === serie);
  };

  const getTeamsLabel = () => {
    if (selectedCategory === "Juvenil") {
      return teamsSelected(serie, juvenil);
    }
    if (selectedCategory === "Senior") return senior;
    if (selectedCategory === "Damas") return damas;

    return juvenil;
  };

  useEffect(() => {
    let teams: ITeamCategoryItem[] = [];

    if (selectedCategory === "Juvenil") {
      teams =
        serie === "all" ? juvenil : juvenil.filter((t) => t.series === serie);
    } else if (selectedCategory === "Senior") {
      teams = senior;
    } else if (selectedCategory === "Damas") {
      teams = damas;
    }

    const exists = teams.some((t) => t.name === team);

    if (!exists) {
      setTeam("all");
    }
  }, [serie, selectedCategory, team, setTeam]);

  return (
    <Root>
      {selectedCategory === "Juvenil" && (
        <SearchSerie serie={serie} setSerie={setSerie} />
      )}

      <FormControl>
        <RadioGroupContainer>
          <RadioGroup
            row
            value={stGame}
            onChange={(e) => setStGame(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="played"
              control={<Radio />}
              label="Finalizados"
            />
            <FormControlLabel
              value="scheduled"
              control={<Radio />}
              label="Programados"
            />
            <FormControlLabel
              value="willPlay"
              control={<Radio />}
              label="Por jugar"
            />
          </RadioGroup>
        </RadioGroupContainer>
      </FormControl>

      <SelectContainer>
        <FormControl fullWidth>
          <Select
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            sx={{
              marginTop: "0.7rem",
              fontSize: "14px",
              ".MuiSelect-select": {
                padding: "6px 12px",
              },
            }}
          >
            <MenuItem value="all" sx={{ fontSize: "14px", py: 1 }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <FilterIcon />
                Todos
              </div>
            </MenuItem>
            {getTeamsLabel().map((t) => (
              <MenuItem
                key={t.id}
                value={t.name}
                sx={{ fontSize: "14px", py: 1 }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img
                    src={getLogo(t.name)}
                    alt={t.name}
                    style={{ width: 20, height: 20, objectFit: "contain" }}
                  />
                  {t.name}
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </SelectContainer>
    </Root>
  );
};

export default SearchBox;
