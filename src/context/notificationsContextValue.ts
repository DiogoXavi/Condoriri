import { createContext } from "react";
import type { INotification } from "../types/types";

type NotificationsContextType = {
  notifications: INotification[];
  loading: boolean;
};

export const NotificationsContext = createContext<NotificationsContextType | null>(null);
