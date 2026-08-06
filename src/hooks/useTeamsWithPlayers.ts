import { useEffect, useState } from "react";
import { teams } from "../constants/teams/teams";
import { getPlayers } from "../services/players.service";
import type { ITeam } from "../types/types";
import type { IPlayerDB } from "../types/types";

export const useTeamsWithPlayers = () => {
  const [data, setData] = useState<ITeam[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const players: IPlayerDB[] = await getPlayers();

      const teamsWithPlayers: ITeam[] = teams.map((team) => ({
        ...team,
        teams: team.teams.map((cat) => ({
          ...cat,
          players: players
            .filter(
              (p) =>
                p.team === team.name &&
                p.category === cat.category &&
                p.id !== undefined
            )
            .map((p) => ({
              id: p.id!,
              name: p.name,
              fullName: p.full_name,
              DNI: p.dni,
              number: p.number,
              position: p.position,
              image: p.image_url,
            })),
        })),
      }));

      setData(teamsWithPlayers);
      setLoading(false);
    };

    fetch();
  }, []);

  return { teams: data, loading };
};