import React, { createContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";
import type { IPlayerDB } from "../types/types";

type PlayerContextType = {
  players: IPlayerDB[];
  playerMap: Map<string, IPlayerDB>;
  loading: boolean;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [players, setPlayers] = useState<IPlayerDB[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlayers = async () => {
      const { data, error } = await supabase.from("players").select("*");

      if (error) {
        console.error("Error cargando jugadores:", error);
      }

      setPlayers(data || []);
      setLoading(false);
    };

    loadPlayers();
  }, []);

const playerMap = useMemo(() => {
  const map = new Map<string, IPlayerDB>();

  players.forEach((p) => {
    map.set(`${p.category}-${p.team}-${p.number}`, p);
  });

  return map;
}, [players]);

  useEffect(() => {
  const loadPlayers = async () => {
    const cached = localStorage.getItem("players");

    if (cached) {
      setPlayers(JSON.parse(cached));
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.from("players").select("*");

    if (error) {
      console.error("Error:", error);
    }

    setPlayers(data || []);
    localStorage.setItem("players", JSON.stringify(data));
    setLoading(false);
  };

  loadPlayers();
}, []);

  return (
    <PlayerContext.Provider value={{ players, playerMap, loading }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContext };
