import { getLogo } from "../../tools/tools";
import type { ITeamCategoryItem } from "../../types/types";

export const infantil: ITeamCategoryItem[] = [
  {
    id: 1,
    series: "A",
    name: "Tira Hoyo",
    url: "",
    logo: getLogo("Tira Hoyo"),
    delegates: [
      { id: 1, name: "Zenon Moscoso", contact: "", category: "Todos" },
      { id: 2, name: "Fernando Moscoso", contact: "", category: "Todos" },
    ],
  },
  {
    id: 2,
    series: "A",
    name: "Puca Loma",
    url: '',
    // url: "https://forms.gle/Pa2yze8SBKPHRWdd9",
    logo: getLogo("Puca Loma"),
    delegates: [
      { id: 1, name: "Jorge Rodriguez", contact: "", category: "Juvenil" },
      { id: 2, name: "Carlos Rodriguez", contact: "", category: "Senior" },
      { id: 3, name: "Marizol Moscoso", contact: "", category: "Damas" },
    ],
  },
 
];
