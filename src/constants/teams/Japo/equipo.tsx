import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
//import { getProfile } from "./images/tools";
export const japo: ITeam[] = [
  {
    id: 4,
    grupo: "A",
    name: "Japo",
    logo: getLogo("Japo"),
    color: "rgb(131, 243, 133)",
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
