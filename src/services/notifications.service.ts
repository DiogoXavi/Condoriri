import { supabase } from "../lib/supabase";
import type { INotification } from "../types/types";

export const getNotifications = async (): Promise<INotification[]> => {
  const { data, error } = await supabase
    .from("notifications")
    .select("*");
  if (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }

  return data || [];
};

export const createNotification = async (
  notification: Omit<INotification, "id">
) => {
  const { data, error } = await supabase
    .from("notifications")
    .insert([notification])
    .select()
    .single();

  if (error) {
    console.error("Error creating notification:", {
    message: error.message,
    details: error.details,
    hint: error.hint,
    code: error.code,
  });
    throw error;
  }

  return data;
};

export const deleteNotification = async (id: number) => {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting notification:", error);
    throw error;
  }
};

export const updateNotification = async (
  id: number,
  updatedFields: Partial<Omit<INotification, "id">>
) => {
  const { data, error } = await supabase
    .from("notifications")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating notification:", error);
    throw error;
  }

  return data;
}