import { useContext } from "react";
import { NotificationsContext } from "./notificationsContextValue";

export const useNotificationsContext = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error("useNotificationsContext debe usarse dentro de NotificationsProvider");
  }

  return context;
};
