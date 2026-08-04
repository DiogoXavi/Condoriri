import { getLogo } from "../../tools/tools";
import type { ITeamCategoryItem } from "../../types/types";

export const damas: ITeamCategoryItem[] = [
  {
    id: 1,
    series: "",
    name: "Avichuca",
    url: "",
    // url: "https://forms.gle/3Z8u7TgGEMZM83Zm7",
    logo: getLogo("Avichuca"),
    delegates: [
      { id: 1, name: "Zaida Colque Gomez", contact: "", category: "Damas" },
    ],
  },
  {
    id: 2,
    series: "",
    name: "Andamarca",
    url: "",
    // url: "https://forms.gle/NTignF759P7pm9wA7",
    logo: getLogo("Andamarca"),
    delegates: [
      { id: 1, name: "Eusebia Correa Acuña", contact: "", category: "Damas" },
    ],
  }
];