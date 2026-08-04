//import { teams } from "../../constants/teams/teams";
//import { damas as teams } from "../../constants/teamCategories/damas";
import { juvenil as teams } from "../../constants/teamCategories/juvenil";
import type { IMatch } from "../../types/types";

export const getTeamName = (id: number): string => {
  const team = teams.find((e) => e.id === id);
  return team ? team.name : "Equipo desconocido";
};

export const damas: IMatch[] = [
  // FECHA 1
  {
    id: 1,
    team1: getTeamName(7),
    scorerTeam1: 1,
    scorerTeam2: 0,
    team2: getTeamName(2),
    date: "26-09-2026",
    time: "09:00",
    location: "1",
    status: "scheduled",
    group: 1,
    observation: "",
    serie: "",
    events: [
      { type: "g", team: getTeamName(1), num: 11 },
      { type: "y", team: getTeamName(2), num: 11 },
    ],
  },
]