import { getLogo } from "../../../tools/tools";
import type { ITeam } from "../../../types/types";
// import { getProfile } from "./images/tools";

export const kumuni: ITeam[] = [
  {
    id: 1,
    grupo: "A",
    name: "Kumuni",
    logo: getLogo("Kumuni"),
    description: "Equipo de fútbol senior del grupo A",
    color: "rgb(249, 54, 54)",
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
