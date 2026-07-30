import type { ITeamCategoryItem } from "../types/types";
import { teams as catTeams } from "../constants/teams/teams"
import { juvenil as teams } from "../constants/teamCategories/juvenil";

const teamMap = new Map<number, ITeamCategoryItem>();

teams.forEach((team) => {
  teamMap.set(team.id, team);
});

export const getTeamNameById = (id: number): string => {
  const team = teamMap.get(id);
  return team ? team.name : "Equipo desconocido";
};

export const getTeamLogoById = (id: number): string => {
  return teamMap.get(id)?.logo || "";
};

const teamColorMap = new Map<string, string>();

catTeams.forEach((team) => {
  teamColorMap.set(team.name, team.color);
});

export const getTeamColorByName = (name: string): string => {
  return teamColorMap.get(name) || "#000";
};