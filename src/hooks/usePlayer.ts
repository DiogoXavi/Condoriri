// hooks/usePlayer.ts
import { useQuery } from "@tanstack/react-query";
import { getPlayerById } from "../services/players.service";
import type { IPlayerDB } from "../types/types";

export const usePlayer = (id?: string | number) => {
  return useQuery<IPlayerDB | null>({
    queryKey: ["player", id],
    queryFn: () => getPlayerById(id!),

    enabled: !!id, 

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10, 

    retry: 1,
  });
};