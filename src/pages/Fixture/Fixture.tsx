import React, { useState, useMemo } from "react";
import {
  MessageNoTeams,
  Root,
  MessageContainer,
  InfoContainer,
} from "./styles";
import {
  FixtureCard,
  SearchBox,
  HeaderCategory,
  Title,
} from "../../components";
import { juvenil } from "../../constants/fixture/juvenil";
import { senior } from "../../constants/fixture/senior";
import { damas } from "../../constants/fixture/damas";
import { infantil } from "../../constants/fixture/infantil";
import logo from "../../assets/images/icons/logo1.png";
import { categories } from "../../constants/categories";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import type { SerieType, CategoryType } from "../../types/types";
//import { useGoalPlayers } from "../../hooks/useGoalPlayers";

const Fixture: React.FC = () => {
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");

  const getFixtureForCategory = (cat: string) => {
    switch (cat) {
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

  const [team, setTeam] = useState("all");
  const [serie, setSerie] = useState<SerieType>("all");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    (categoryParam as CategoryType) || "Juvenil",
  );
//const { playerMap, loading } = useGoalPlayers();

  const navigate = useNavigate();

  const fixture = useMemo(() => {
    return getFixtureForCategory(selectedCategory);
  }, [selectedCategory]);

  const hasScheduledInitial = fixture.some(
    (match) => match.status === "scheduled" || match.status === "canceled",
  );

  const [stGame, setStGame] = useState(
    hasScheduledInitial ? "scheduled" : "played",
  );
  const handleCategoryChange = (cat: CategoryType) => {
    setSelectedCategory(cat);
    setSerie("all");
    setTeam("all");

    const newFixture = getFixtureForCategory(cat);

    const hasScheduledOrCanceled = newFixture.some(
      (match) => match.status === "scheduled" || match.status === "canceled",
    );
    const hasPlayed = newFixture.some((match) => match.status === "played");

    if (hasScheduledOrCanceled) {
      setStGame("scheduled");
    } else if (hasPlayed) {
      setStGame("played");
    } else {
      setStGame("all");
    }

    navigate(`/fixture?category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };
  const filteredMatches = useMemo(() => {
    return fixture
      .filter((match) => {
        let matchStatusOk = false;

        if (stGame === "all") {
          matchStatusOk = true;
        } else if (stGame === "willPlay") {
          matchStatusOk =
            match.status === "willPlay" ||
            match.status === "" ||
            match.status === "scheduled";
        } else if (stGame === "scheduled") {
          matchStatusOk =
            match.status === "scheduled" || match.status === "canceled";
        } else if (stGame === "played") {
          matchStatusOk = match.status === "played";
        } else {
          matchStatusOk = match.status === stGame;
        }
        const matchTeamOk =
          team === "all" || match.team1 === team || match.team2 === team;

        let matchSerieOk = true;

        if (serie === "A") {
          matchSerieOk = match.serie ? match.serie === "A" : match.id % 2 === 0;
        }

        if (serie === "B") {
          matchSerieOk = match.serie ? match.serie === "B" : match.id % 2 !== 0;
        }

        return matchStatusOk && matchTeamOk && matchSerieOk;
      })
      .sort((a, b) => {
        if (stGame === "played") {
          const groupA = parseInt(
            String(a.group).replace(/\D/g, "") || "0",
            10,
          );
          const groupB = parseInt(
            String(b.group).replace(/\D/g, "") || "0",
            10,
          );
          return groupB - groupA;
        }
        return 0;
      });
  }, [fixture, stGame, team, serie]);

  return (
    <Root>
      <HeaderCategory
        img={logo}
        title={`Fixture ${selectedCategory}`}
        color="#22b7be"
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      <Title title={`Fixture ${selectedCategory}`} />
      <InfoContainer>
        <SearchBox
          setStGame={setStGame}
          selectedCategory={selectedCategory}
          stGame={stGame}
          team={team}
          setTeam={setTeam}
          serie={serie}
          setSerie={setSerie}
        />

        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <FixtureCard
              key={match.id}
              id={match.id}
              team1={match.team1}
              team2={match.team2}
              scorerTeam1={match.scorerTeam1}
              scorerTeam2={match.scorerTeam2}
              date={match.date}
              time={match.time}
              location={match.location}
              status={match.status}
              group={match.group}
              observation={match.observation}
              category={selectedCategory}
              serie={match.serie}
              events={match.events}
              // playerMap={playerMap}
              // isloading={loading}
            />
          ))
        ) : (
          <MessageContainer>
            <MessageNoTeams>
              <Typography
                variant="h4"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                No se encontraron resultados para este filtro.
              </Typography>
            </MessageNoTeams>
          </MessageContainer>
        )}
      </InfoContainer>
    </Root>
  );
};

export default Fixture;
