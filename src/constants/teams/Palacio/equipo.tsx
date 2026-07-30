import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const palacio: ITeam[] = [
  {
    id: 6,
    grupo: "A",
    name: "Palacio",
    logo: getLogo("Palacio"),
    color: "rgb(191, 190, 190)",
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
