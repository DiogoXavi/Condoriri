import { getLogo } from "../../../tools/tools";

import type { ITeam } from "../../../types/types";

export const pucaLoma: ITeam[] = [
  {
    id: 13,
    grupo: "A",
    name: "Puca Loma",
    logo: getLogo("Puca Loma"),
    description: "Equipo de fútbol senior del grupo A",
    color: "#48c9b0",
    teams: [
      {
        id: 1,
        category: "Juvenil",
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
