import { getLogo } from "../../tools/tools";
import type { ITeamCategoryItem } from "../../types/types";

export const senior: ITeamCategoryItem[] = [
  {
    id: 1,
    name: "Malliri",
    url: "",
    logo: getLogo("Malliri"),
    delegates: [
      // { id: 1, name: "Oscar Moscoso", contact: "", category: "Senior" },
    ],
    series: "",
  },
  {
    id: 2,
    name: "Kumuni",
    url: "",
    logo: getLogo("Kumuni"),
    delegates: [
      // { id: 1, name: "Tito Villca", contact: "", category: "Senior" },
      // { id: 2, name: "Rene Villca", contact: "", category: "Senior" },
    ],
    series: "",
  }
];