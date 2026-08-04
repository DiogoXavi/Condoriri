import React, { useState } from "react";
import { DelegateCard, HeaderCategory, Title } from "../../components";
import logo from "../../assets/images/icons/logo1.png";
import { juvenil } from "../../constants/teamCategories/juvenil";
import { senior } from "../../constants/teamCategories/senior";
import { damas } from "../../constants/teamCategories/damas";
import { infantil } from "../../constants/teamCategories/infantil";
import { categories } from "../../constants/categories";
import { InfoContainer, Root, MessageNoTeams } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import type { ITeamCategoryItem, SerieType, CategoryType } from "../../types/types";

const TeamCategories: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    (categoryParam as CategoryType) || "Juvenil",
  );
  //const [serie, setSerie] = useState<SerieType>("all");

  const handleCategoryChange = (cat: CategoryType) => {
    setSelectedCategory(cat);
    navigate(`/team-categories?category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

    const teamsSelected = (serie: SerieType, teams: ITeamCategoryItem[]) => {
      if (serie === "all") return teams;
      return teams.filter((t) => t.series === serie);
    };

  const getTeamsLabel = () => {
      if (selectedCategory === "Juvenil") {
        return teamsSelected("all", juvenil);
      }
      if (selectedCategory === "Senior") return senior;
      if (selectedCategory === "Damas") return damas;
  
      return juvenil;
    };

  const getTeamCategory = () => {
    switch (selectedCategory) {
      case "Juvenil":
        return juvenil;
      case "Senior":
        return senior;
      case "Damas":
        return damas;
      case "Infantil":
        return infantil;
      default:
        return juvenil;
    }
  };

  const teams = getTeamCategory();

  return (
    <Root>
      <HeaderCategory
        img={logo}
        color="#6cb9ff"
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      <InfoContainer>
        <Title title={`Equipos categoría ${selectedCategory}`} />
      {/* {selectedCategory === "Juvenil" && <SearchSerie serie={serie} setSerie={setSerie} />} */}

        {teams.length === 0 ? (
          <MessageNoTeams>
            <Typography variant="h4" align="center">
              No hay equipos registrados en esta categoría.
              <br />
              Pronto se publicarán los equipos participantes del campeonato.
              <br /> <br />
              Si necesitas más información puedes comunicarte con los
              organizadores.
            </Typography>

            <Button
              variant="contained"
              startIcon={<QuestionAnswerIcon />}
              href="/about"
              sx={{ mt: 2 }}
            >
              CONTACTOS
            </Button>
          </MessageNoTeams>
        ) : (
          getTeamsLabel().map((team) => (
            <DelegateCard
              key={team.id}
              id={team.id}
              img={team.logo}
              url={team.url}
              name={team.name}
              category={selectedCategory}
              delegates={team.delegates}
            />
          ))
        )}
      </InfoContainer>
    </Root>
  );
};

export default TeamCategories;
