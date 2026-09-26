import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { supabase } from "../lib/supabase";
import type { IPlayerDB } from "../types/types";

type PlayerContextType = {
  players: IPlayerDB[];
  playerMap: Map<string, IPlayerDB>;
  loading: boolean;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [players, setPlayers] = useState<IPlayerDB[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const cached = localStorage.getItem("players");

        if (cached) {
          const parsedPlayers = JSON.parse(cached);

          if (Array.isArray(parsedPlayers)) {
            setPlayers(parsedPlayers);
            setLoading(false);
            return;
          }
        }

        const { data, error } = await supabase
          .from("players")
          .select("*");

        if (error) {
          console.error("Error cargando jugadores:", error);
          setPlayers([]);
          return;
        }

        const playersData = data ?? [];

        setPlayers(playersData);

        localStorage.setItem(
          "players",
          JSON.stringify(playersData)
        );
      } catch (error) {
        console.error("Error cargando jugadores:", error);
        setPlayers([]);
      } finally {
        setLoading(false);
      }
    };

    loadPlayers();
  }, []);

  const playerMap = useMemo(() => {
    const map = new Map<string, IPlayerDB>();

    players.forEach((player) => {
      map.set(
        `${player.category}-${player.team}-${player.number}`,
        player
      );
    });

    return map;
  }, [players]);

  return (
    <PlayerContext.Provider
      value={{
        players,
        playerMap,
        loading,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContext };