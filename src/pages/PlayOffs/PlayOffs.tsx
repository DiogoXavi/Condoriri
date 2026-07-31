import React from "react";
import { MatchCard, Title, TeamMatchCard } from "../../components";
import { orderTable } from "../../tools/tools";
import schema from "../../assets/images/logos/squema2.webp";
import type { ITeamStanding } from "../../types/types";
import logo from "../../assets/images/logoEquipos/chillagua.webp";
import { getTeamLogoById, getTeamNameById } from "../../tools/geters";

import { juvenil as fixtureJuvenil } from "../../constants/fixture/juvenil";
import { juvenil as teamsJuvenil } from "../../constants/teamCategories/juvenil";

import { generateTable } from "../../utils/generateTable";

import {
  Page,
  BracketContainer,
  Side,
  // Center,
  // FinalBox,
  SchemaContent,
  LeftContent,
  RightContent,
  LogoCenter,
  TeamName,
  TeamLogo,
  ChampeonTitle,
  TeamContent,
} from "./styles";
import { Divider } from "@mui/material";

const Playoffs: React.FC = () => {
  const initialTable: ITeamStanding[] = teamsJuvenil.map((team) => ({
    id: team.id,
    team: team.name,
    serie: team.series,
    matchesPlayed: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  }));

  const table = React.useMemo<ITeamStanding[]>(() => {
    const standings = generateTable(fixtureJuvenil, initialTable);

    return orderTable(standings);
  }, [initialTable]);

  const filterTableBySerie = React.useCallback(
    (tableData: ITeamStanding[], serie: string): ITeamStanding[] => {
      if (!serie || serie === "all") {
        return tableData;
      }

      return tableData.filter((team) => team.serie === serie);
    },
    [],
  );

  const serieA = React.useMemo(() => {
    return filterTableBySerie(table, "A").slice(0, 8);
  }, [table, filterTableBySerie]);

  const serieB = React.useMemo(() => {
    return filterTableBySerie(table, "B").slice(0, 8);
  }, [table, filterTableBySerie]);

  // octavos

  console.log(serieA, "seie A");
  console.log(serieB, "seie B");

  const leftTeams8 = [
    {
      // team1: serieA[0]?.id || 0,
      // team2: serieB[7]?.id || 0,
      team1: 1,
      team2: 8,
      isExpanded: false,
      result1: 4,
      result2: 5,
    },
    {
      team1: 21,
      team2: 3,
      isExpanded: false,
      result1: 2,
      result2: 3,
    },
    {
      team1: 18,
      team2: 24,
      isExpanded: false,
      result1: 1,
      result2: 0,
    },
    {
      team1: 13,
      team2: 15,
      isExpanded: false,
      result1: 5,
      result2: 4,
    },
  ];

  const rightTeams8 = [
    {
      team1: 4,
      team2: 5,
      result1: 1,
      result2: 4,
      isExpanded: false,
    },
    {
      team1: 27,
      team2: 9,
      result1: 7,
      result2: 6,
      isExpanded: false,
    },
    {
      team1: 23,
      team2: 10,
      result1: 1,
      result2: 7,
      isExpanded: false,
    },
    {
      team1: 20,
      team2: 26,
      result1: 2,
      result2: 0,
      isExpanded: false,
    },
  ];

  // octavos

  const leftTeams4 = [
    {
      team1: 8,
      team2: 3,
      result1: 0,
      result2: 1,
      isExpanded: false,
    },
    {
      team1: 18,
      team2: 13,
      result1: 1,
      result2: 0,
      isExpanded: false,
    },
  ];

  const rightTeams4 = [
    {
      team1: 5,
      team2: 27,
      result1: 1,
      result2: 5,
      isExpanded: false,
    },
    {
      team1: 10,
      team2: 20,
      result1: 5,
      result2: 4,
      isExpanded: false,
    },
  ];

  // semis
  const leftTeams2 = [
    {
      team1: 3,
      team2: 18,
      result1: 1,
      result2: 0,
      isExpanded: false,
    },
  ];

  const rightTeams2 = [
    {
      team1: 27,
      team2: 10,
      result1: 2,
      result2: 1,
      isExpanded: false,
    },
  ];

  const finalPositions = [
    { position: "🥇 Campeón", teamId: 27 },
    { position: "🥈 Subcampeón", teamId: 3 },
    { position: "🥉 3° Lugar", teamId: 18 },
    { position: "4° Lugar", teamId: 10 },
    { position: "5° Lugar", teamId: 20 },
    { position: "6° Lugar", teamId: 13 },
  ];

  return (
    <Page>
      <Title title="Octavos de final" />
      <BracketContainer>
        <LogoCenter src={logo} alt="Logo Campeonato" />
        {/* IZQUIERDA */}
        <LeftContent>
          <Side grade="8">
            {leftTeams8.map((team, index) => (
              <MatchCard
                key={index}
                team1={team.team1}
                team2={team.team2}
                result1={team.result1}
                result2={team.result2}
                position="left"
                isExpanded={team.isExpanded}
              />
            ))}
          </Side>
          <Side grade="4">
            {leftTeams4.map((team, index) => (
              <MatchCard
                key={index}
                team1={team.team1}
                team2={team.team2}
                result1={team.result1}
                result2={team.result2}
                position="left"
                isExpanded={team.isExpanded}
              />
            ))}
          </Side>
          <Side grade="4">
            {leftTeams2.map((team, index) => (
              <MatchCard
                key={index}
                team1={team.team1}
                team2={team.team2}
                result1={team.result1}
                result2={team.result2}
                position="left"
                isExpanded={team.isExpanded}
              />
            ))}
          </Side>
          <Side>
            <TeamMatchCard
              team={3}
              result={3}
              isExpanded={false}
              position="left"
            />
          </Side>
        </LeftContent>

        {/* CENTRO */}
        {/* <Center>
          <FinalBox>FINAL</FinalBox>
        </Center> */}

        {/* DERECHA */}
        <RightContent>
          <Side>
            <TeamMatchCard
              team={27}
              result={4}
              isExpanded={false}
              position="right"
            />
          </Side>
          <Side grade="4">
            {rightTeams2.map((team, index) => (
              <MatchCard
                key={index}
                team1={team.team1}
                team2={team.team2}
                result1={team.result1}
                result2={team.result2}
                position="right"
                isExpanded={team.isExpanded}
              />
            ))}
          </Side>
          <Side grade="4">
            {rightTeams4.map((team, index) => (
              <MatchCard
                key={index}
                team1={team.team1}
                team2={team.team2}
                result1={team.result1}
                result2={team.result2}
                position="right"
                isExpanded={team.isExpanded}
              />
            ))}
          </Side>
          <Side grade="8">
            {rightTeams8.map((team, index) => (
              <MatchCard
                key={index}
                team1={team.team1}
                team2={team.team2}
                result1={team.result1}
                result2={team.result2}
                position="right"
                isExpanded={team.isExpanded}
              />
            ))}
          </Side>
        </RightContent>
      </BracketContainer>
      <Divider style={{ marginTop: "20px" }} />
      <Title title="Ranking Final" />
      <>
        {finalPositions.map((item) => (
          <TeamContent key={item.teamId}>
            <TeamLogo
              src={getTeamLogoById(item.teamId)}
              alt={getTeamNameById(item.teamId)}
            />

            <TeamName>{getTeamNameById(item.teamId)}</TeamName>

            <ChampeonTitle>{item.position}</ChampeonTitle>
          </TeamContent>
        ))}
      </>
      <Title title="Esquema de playoffs" />
      <SchemaContent src={schema} alt="Esquema de playoffs" />
    </Page>
  );
};

export default Playoffs;
