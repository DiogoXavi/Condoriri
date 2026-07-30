import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const tuntoco: ITeam[] = [
  {
    id: 30,
    grupo: "A",
    name: "Tuntoco",
    logo: getLogo("Tuntoco"),
    color: "rgb(101, 247, 218)",
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
