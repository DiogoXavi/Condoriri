import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export  const useGoalPlayers = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("useGoalPlayers debe usarse dentro de PlayerProvider");
  }

  return context;
  
};