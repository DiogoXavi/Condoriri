import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const rodeo: ITeam[] = [
  {
    id: 10,
    grupo: "A",
    name: 'Rodeo "A"',
    logo: getLogo('Rodeo "A"'),
    color: "rgb(57, 220, 7)",
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
      {
        id: 2,
        category: "Senior",
        players: [
        ],
      },
     
    ],
  },
];
