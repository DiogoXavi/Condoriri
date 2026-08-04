// import { teams } from "../../constants/teams/teams";
import { juvenil as teams } from "../../constants/teamCategories/juvenil";
import type { IMatch } from "../../types/types";


export const getTeamName = (id: number): string => {
  const team = teams.find((e) => e.id === id);
  return team ? team.name : "Equipo desconocido";
};

export const senior: IMatch[] = [
  // FECHA 1
  {
    id: 1,
    team1: getTeamName(7),
    scorerTeam1: 0,
    scorerTeam2: 7,
    team2: getTeamName(2),
    date: "26-09-2026",
    time: "10:00",
    location: "1",
    status: "scheduled",
    group: 1,
    observation: "",
    events: [
        { type: "g", team: getTeamName(2), num: 7, qty: 2 },
        { type: "g", team: getTeamName(2), num: 17 },
        { type: "g", team: getTeamName(2), num: 11, qty: 3 },
        { type: "g", team: getTeamName(2), num: 10 },
      ]
  }
]