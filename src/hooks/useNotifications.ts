import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";
import type { INotification } from "../types/types";

export type UseNotificationsResult = {
  notifications: INotification[];
  loading: boolean;
};

export const useNotifications = (): UseNotificationsResult => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [loading, setLoading] = useState(true);

const playSound = () => {
  const audio = new Audio("/sounds/notifications.mp3");
  audio.play().catch(() => {});
};

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .order("id", { ascending: false });

      if (!isMounted) return;

      if (error) {
        console.error("Error fetching notifications:", error);
      } else {
        setNotifications(data || []);
      }

      setLoading(false);
    };

    init();

    const channel = supabase
      .channel("notifications-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "notifications",
        },
        (payload) => {
          const { eventType, new: newData, old } = payload;

          setNotifications((prev) => {
            switch (eventType) {
              case "INSERT":
                if (prev.find((n) => n.id === (newData as INotification).id)) {
                  return prev;
                }
                playSound();
                toast.success((newData as INotification).title);
                return [newData as INotification, ...prev];

              case "UPDATE":
                return prev.map((item) =>
                  item.id === (newData as INotification).id
                    ? (newData as INotification)
                    : item
                );

              case "DELETE":
                return prev.filter(
                  (item) => item.id !== (old as INotification).id
                );

              default:
                return prev;
            }
          });
        }
      )
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return { notifications, loading };
};
