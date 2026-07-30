import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const sanJoseT: ITeam[] = [
  {
    id: 17,
    grupo: "A",
    name: "San Jose T.",
    logo: getLogo("San Jose T."),
    color: "rgba(1, 179, 7, 0.77)",
    teams: [
      {
        id: 1,
        category: "Juvenil",
        players: [
      // {
      //   id: 1,
      //   name: "Cristin Flores",
      //  fullName: "Carlos Flores",
      //   DNI: "12345678",
      //   image: "https://example.com/player1.jpg",
      //   number: 1,
      //   position: "Arquero",
      // },
        ],
      },
     
    ],
  },
];
