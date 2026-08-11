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
    id: 1,
    team1: getTeamName(7),
    scorerTeam1: 1,
    scorerTeam2: 2,
    team2: getTeamName(2),
    date: "26-09-2026",
    time: "08:00",
    location: "1", 
    status: "scheduled",
    group: 1,
    observation: "",
    serie: "",
  },
]