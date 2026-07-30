import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const ocuri: ITeam[] = [
  {
    id: 31,
    grupo: "A",
    name: "Ocuri",
    logo: getLogo("Ocuri"),
    color: "rgb(245, 151, 35)",
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
