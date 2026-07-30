import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const lajaKasa: ITeam[] = [
  {
    id: 28,
    grupo: "A",
    name: "Laja Kasa",
    logo: getLogo("Laja Kasa"),
    color: "rgb(53, 169, 72)",
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
      {
        id: 3,
        category: "Damas",
        players: [
        ],
      },
     
    ],
  },
];
