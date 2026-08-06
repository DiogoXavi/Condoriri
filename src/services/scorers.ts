import { supabase } from "../lib/supabase";
import type { IMatch, MatchEvent, IPlayerDB, CategoryType } from "../types/types";

type ScorerMap = {
  team: string;
  num: number;
  goals: number;
};

export type ScorerWithPlayer = {
  id: number;
  name: string;
  fullName: string;
  number: number;
  team: string;
  profile?: string;
  goals: number;
};

export const getTopScorersWithPlayers = async (
  matches: IMatch[],
  category: CategoryType,
  minGoals: number = 0 // 👈 parámetro
): Promise<ScorerWithPlayer[]> => {

  // 🔥 clave = team-num
  const map = new Map<string, ScorerMap>();

  // =========================
  // 1. CONTAR GOLES
  // =========================
  matches.forEach((match) => {
    if (match.status !== "played") return;

    match.events?.forEach((event: MatchEvent) => {
      if (event.type !== "g") return;
      if (!event.num) return;

      const key = `${event.team}-${event.num}`;

      if (!map.has(key)) {
        map.set(key, {
          team: event.team,
          num: event.num,
          goals: 0,
        });
      }

      map.get(key)!.goals += event.qty || 1;
    });
  });

  const values = Array.from(map.values());

  if (values.length === 0) return [];

  // =========================
  // 2. TRAER JUGADORES
  // =========================
  const numbers = values.map((v) => v.num);
  const teams = values.map((v) => v.team);

  const { data: players, error } = await supabase
    .from("players")
    .select("*")
    .in("number", numbers)
    .in("team", teams)
    .eq("category", category);

  if (error) {
    console.error("Error cargando jugadores:", error);
    return [];
  }

  if (!players) return [];

  // =========================
  // 3. MERGE CORRECTO
  // =========================
  const result: ScorerWithPlayer[] = values.map((scorer) => {
    const player = players.find(
      (p: IPlayerDB) =>
        p.number === scorer.num && p.team === scorer.team
    );

    return {
      id: player?.id || 0,
      name: player?.name || `Jugador #${scorer.num}`,
      fullName: player?.full_name || "",
      number: scorer.num,
      team: scorer.team,
      profile: player?.image_url,
      goals: scorer.goals,
    };
  });

  // =========================
  // 4. ORDENAR
  // =========================
  return result
  .filter((player) => player.goals >= minGoals)
  .sort((a, b) => b.goals - a.goals);
};