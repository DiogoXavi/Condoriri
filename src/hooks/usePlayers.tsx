import { useQuery } from "@tanstack/react-query";
import { getPlayers } from "../services/players.service";
import type { IPlayerDB } from "../types/types";

export const usePlayers = (filters?: {
  team?: string;
  category?: string;
}) => {
  return useQuery<IPlayerDB[]>({
    queryKey: ["players", filters],
    queryFn: () => getPlayers(filters),

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,

    placeholderData: (previousData) => previousData,

    enabled: true,
  });
};