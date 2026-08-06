import { supabase } from "../lib/supabase";
import type { IPlayerDB } from "../types/types";

// ================= GET PLAYERS =================
export const getPlayers = async (filters?: {
  team?: string;
  category?: string;
}): Promise<IPlayerDB[]> => {
  let query = supabase
    .from("players")
    .select("*")
    .order("created_at", { ascending: false }); // ⚡ ordenado

  // 🔥 filtros SQL reales
  if (filters?.team) {
    query = query.eq("team", filters.team);
  }

  if (filters?.category) {
    query = query.eq("category", filters.category);
  }

  const { data, error } = await query;

  if (error) {
    console.error("❌ Error fetching players:", error.message);
    throw new Error(error.message);
  }

  return data ?? [];
};

// ================= GET PLAYER BY ID =================
export const getPlayerById = async (
  id: string | number
): Promise<IPlayerDB | null> => {
  const { data, error } = await supabase
    .from("players")
    .select("*") // 🔥 IMPORTANTE
    .eq("id", id)
    .maybeSingle(); // mejor que single()

  if (error) {
    console.error("Error fetching player:", error);
    return null;
  }

  return data as IPlayerDB;
};

// ================= CREATE =================
export const createPlayer = async (
  player: Omit<IPlayerDB, "id" | "created_at">
): Promise<IPlayerDB> => {
  const { data, error } = await supabase
    .from("players")
    .insert([player])
    .select()
    .single();

  if (error) {
    console.error("❌ Error creating player:", error.message);
    throw new Error(error.message);
  }

  return data;
};

// ================= UPDATE =================
export const updatePlayer = async (
  id: number,
  updatedFields: Partial<IPlayerDB>
): Promise<IPlayerDB> => {
  const { data, error } = await supabase
    .from("players")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("❌ Error updating player:", error.message);
    throw new Error(error.message);
  }

  return data;
};

// ================= DELETE =================
export const deletePlayer = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from("players")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("❌ Error deleting player:", error.message);
    throw new Error(error.message);
  }
};

// ================= UPLOAD IMAGE =================
export const uploadPlayerImage = async (file: File): Promise<string> => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}.${fileExt}`;

  const { error } = await supabase.storage
    .from("players")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("❌ Error uploading image:", error.message);
    throw new Error(error.message);
  }

  const { data } = supabase.storage
    .from("players")
    .getPublicUrl(fileName);

  return data.publicUrl;
};