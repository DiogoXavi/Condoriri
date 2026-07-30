import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const rodeoB: ITeam[] = [
  {
    id: 14,
    grupo: "A",
    name: 'Rodeo "B"',
    logo: getLogo('Rodeo "B"'),
    color: "rgb(42, 97, 249)",
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
