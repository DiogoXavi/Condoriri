import { juvenil as teams } from "../../constants/teamCategories/juvenil";
import type { IMatch } from "../../types/types";

const playoffTeams: Record<number, string> = {
  30: "Ganador 183",
  31: "Ganador 184",
  32: "Ganador 185",
  33: "Ganador 186",
  34: "Ganador 187",
  35: "Ganador 188",
  36: "Ganador 189",
  37: "Ganador 190", 
  38: "Ganador 191",
  39: "Ganador 192",
  40: "Ganador 193",
  41: "Ganador 194",
  42: "Perdedor 195",
  43: "Perdedor 196",
  44: "Ganador 195",
  45: "Ganador 196",
};

export const getTeamName = (id: number): string => {
  if (playoffTeams[id]) {
    return playoffTeams[id];
  }

  const team = teams.find((e) => e.id === id);

  return team?.name ?? "Equipo desconocido";
};

export const juvenil: IMatch[] = [
  // FECHA 1
  {
    id: 99,
    team1: getTeamName(2),
    scorerTeam1: 1,
    scorerTeam2: 0,
    team2: getTeamName(4),
    date: "04-09-2026",
    time: "09:00",
    location: "4", 
    status: "played",
    group: 0,
    observation: "",
    serie: "",
  },
    {
    id: 1,
    team1: getTeamName(1),
    scorerTeam1: 3,
    scorerTeam2: 0,
    team2: getTeamName(2),
    date: "04-09-2026",
    time: "10:30",
    location: "5", 
    status: "played",
    group: 1,
    observation: "",
    serie: "",
       events: [
      { type: "y", team: getTeamName(1), num: 8 },
      { type: "g", team: getTeamName(1), num: 11 },
      { type: "y", team: getTeamName(1), num: 13 },
      { type: "g", team: getTeamName(1), num: 13 },
      { type: "g", team: getTeamName(1), num: 6 },
    ],
     
  },
  {
    id: 2,
    team1: getTeamName(3),
    scorerTeam1: 3,
    scorerTeam2: 0,
    team2: getTeamName(4),
    date: "11-09-2026",
    time: "09:00",
    location: "4", 
    status: "scheduled",
    group: 1,
    observation: "",
    serie: "",
    //  events: [
    //   { type: "y", team: getTeamName(3), num: 8 },
    //   { type: "g", team: getTeamName(3), num: 11 },
    //   { type: "y", team: getTeamName(3), num: 13 },
    //   { type: "g", team: getTeamName(3), num: 13 },
    //   { type: "g", team: getTeamName(3), num: 6 },
    // ],
  },
      {
    id: 3,
    team1: getTeamName(5),
    scorerTeam1: 1,
    scorerTeam2: 2,
    team2: getTeamName(6),
    date: "11-09-2026",
    time: "10:30",
    location: "4", 
    status: "scheduled",
    group: 1,
    observation: "",
    serie: "",
  },
  // FECHA 2
    {
    id: 4,
    team1: getTeamName(2),
    scorerTeam1: 0,
    scorerTeam2: 0,
    team2: getTeamName(4),
    date: "11-09-2026",
    time: "12:00",
    location: "4", 
    status: "scheduled",
    group: 2,
    observation: "",
    serie: "",
    //    events: [
    //   { type: "y", team: getTeamName(1), num: 8 },
    //   { type: "g", team: getTeamName(1), num: 11 },
    //   { type: "y", team: getTeamName(1), num: 13 },
    //   { type: "g", team: getTeamName(1), num: 13 },
    //   { type: "g", team: getTeamName(1), num: 6 },
    // ],
     
  },
      {
    id: 5,
    team1: getTeamName(1),
    scorerTeam1: 3,
    scorerTeam2: 0,
    team2: getTeamName(5),
    date: "11-09-2026",
    time: "13:30",
    location: "4", 
    status: "scheduled",
    group: 2,
    observation: "",
    serie: "",
    //  events: [
    //   { type: "y", team: getTeamName(3), num: 8 },
    //   { type: "g", team: getTeamName(3), num: 11 },
    //   { type: "y", team: getTeamName(3), num: 13 },
    //   { type: "g", team: getTeamName(3), num: 13 },
    //   { type: "g", team: getTeamName(3), num: 6 },
    // ],
  },
      {
    id: 6,
    team1: getTeamName(3),
    scorerTeam1: 1,
    scorerTeam2: 2,
    team2: getTeamName(6),
    date: "11-09-2026",
    time: "15:00",
    location: "5", 
    status: "scheduled",
    group: 2,
    observation: "",
    serie: "",
  },
]