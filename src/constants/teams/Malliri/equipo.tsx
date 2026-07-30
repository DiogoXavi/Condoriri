import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const malliri: ITeam[] = [
  {
    id: 3,
    grupo: "A",
    name: "Malliri",
    logo: getLogo("Malliri"),
    color: "rgb(241, 38, 78)",
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
    {
        id: 2,
        category: "Senior",
        players: [
        ],
      },   
    ],
  },
];
