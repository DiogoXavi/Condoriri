import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const corma: ITeam[] = [
  {
    id: 26,
    grupo: "A",
    name: "Corma",
    logo: getLogo("Corma"),
    color: "rgb(243, 49, 27)",
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
