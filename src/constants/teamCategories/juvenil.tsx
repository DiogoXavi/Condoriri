import { getLogo } from "../../tools/tools";
import type { ITeamCategoryItem } from "../../types/types";

export const juvenil: ITeamCategoryItem[] = [

  {
    id: 6,
    series: "A",
    name: "Palacio",
    url: "",
    // url: "https://forms.gle/kuXGysPJVMphh9eD8",
    logo: getLogo("Palacio"),
    delegates: [
      {
        id: 1,
        name: "Dionatan Villca Condori ",
        contact: "",
        category: "Juvenil",
      },
      { id: 2, name: "Elzon Rivera Cruz", contact: "", category: "Juvenil" },
    ],
  },
  {
    id: 7,
    series: "B",
    name: "Condoriri",
    url: "",
    // url: "https://forms.gle/3xnmCEFhWyQzvKqX8",
    logo: getLogo("Condoriri"),
    delegates: [
      { id: 1, name: "Iver Carmona", contact: "", category: "Juvenil" },
    ],
  }
];