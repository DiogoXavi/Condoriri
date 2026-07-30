import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const punquina: ITeam[] = [
  {
    id: 32,
    grupo: "A",
    name: "Punquina",
    logo: getLogo("Punquina"),
    color: "#9cd2ed",
    teams: [
      {
        id: 3,
        category: "Damas",
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
