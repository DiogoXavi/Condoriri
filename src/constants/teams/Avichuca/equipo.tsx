import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const avichuca: ITeam[] = [
  {
    id: 5,
    grupo: "A",
    name: "Avichuca",
    logo: getLogo("Avichuca"),
    color: "rgb(60, 242, 100)",
    teams: [
      {
        id: 1,
        category: "Juvenil",
        players: [
        ],
      },
      {
        id: 3,
        category: "Damas",
        players: [
        ],
      },
     
    ],
  },
];
