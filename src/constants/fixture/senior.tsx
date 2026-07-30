// import { teams } from "../../constants/teams/teams";
import { senior as teams } from "../../constants/teamCategories/senior";
import type { IMatch } from "../../types/types";


export const getTeamName = (id: number): string => {
  const team = teams.find((e) => e.id === id);
  return team ? team.name : "Equipo desconocido";
};

export const senior: IMatch[] = [
  // FECHA 1
  {
    id: 1,
    team1: getTeamName(1),
    scorerTeam1: 0,
    scorerTeam2: 7,
    team2: getTeamName(2),
    date: "10-05-2026",
    time: "10:00",
    location: "1",
    status: "played",
    group: 1,
    observation: "",
    events: [
        { type: "g", team: getTeamName(2), num: 7, qty: 2 },
        { type: "g", team: getTeamName(2), num: 17 },
        { type: "g", team: getTeamName(2), num: 11, qty: 3 },
        { type: "g", team: getTeamName(2), num: 10 },
      ]
  },
  {
    id: 2,
    team1: getTeamName(3),
    scorerTeam1: 2,
    scorerTeam2: 0,
    team2: getTeamName(4),
    date: "10-05-2026",
    time: "11:00",
    location: "1",
    status: "played",
    group: 1,
    observation: "",
    events: [
        { type: "g", team: getTeamName(3), num: 13 },
        { type: "g", team: getTeamName(3), num: 16 },
      ]
  },
  {
    id: 3,
    team1: getTeamName(5),
    scorerTeam1: 7,
    scorerTeam2: 1,
    team2: getTeamName(6),
    date: "10-05-2026",
    time: "12:00",
    location: "1",
    status: "played",
    group: 1,
    observation: "",
    events: [
        { type: "g", team: getTeamName(5), num: 7, qty: 2 },
        { type: "g", team: getTeamName(5), num: 9, qty: 4 },
        { type: "g", team: getTeamName(5), num: 10 },

        { type: "g", team: getTeamName(6), num: 9 },
    ]
  },
  {
    id: 4,
    team1: getTeamName(7),
    scorerTeam1: 2,
    scorerTeam2: 0,
    team2: getTeamName(8),
    date: "17-05-2026",
    time: "8:00",
    location: "1",
    status: "played",
    group: 1,
    observation: "",
    events: [
        { type: "g", team: getTeamName(7), num: 19 },
        { type: "g", team: getTeamName(7), num: 21 },
      ]
  },
  // // FECHA 2
    {
    id: 5,
    team1: getTeamName(1),
    scorerTeam1: 0,
    scorerTeam2: 2,
    team2: getTeamName(4),
    date: "17-05-2026",
    time: "9:00",
    location: "1",
    status: "played",
    group: 2,
    observation: "",
    events: [
        { type: "g", team: getTeamName(4), num: 20 },
        { type: "g", team: getTeamName(4), num: 18 },
      ]
  },
    {
    id: 6,
    team1: getTeamName(2),
    scorerTeam1: 3,
    scorerTeam2: 3,
    team2: getTeamName(6),
    date: "17-05-2026",
    time: "10:00",
    location: "1",
    status: "played",
    group: 2,
    observation: "Miska Mayu gano los puntos por observar a un jugador de Quirpini",
    resultType: "wo_team2",
    events: [
        { type: "g", team: getTeamName(2), num: 14 },
        { type: "g", team: getTeamName(2), num: 17 },
        { type: "g", team: getTeamName(2), num: 11 },

        { type: "g", team: getTeamName(6), num: 7 },
        { type: "g", team: getTeamName(6), num: 19 },
        { type: "g", team: getTeamName(6), num: 21 },
      ]
  },
    {
    id: 7,
    team1: getTeamName(3),
    scorerTeam1: 1,
    scorerTeam2: 3,
    team2: getTeamName(8),
    date: "17-05-2026",
    time: "11:00",
    location: "1",
    status: "played",
    group: 2,
    observation: "",
    events: [
        { type: "g", team: getTeamName(8), num: 99, qty: 3 },

        { type: "g", team: getTeamName(3), num: 5 },
      ]
  },
    {
    id: 8,
    team1: getTeamName(5),
    scorerTeam1: 3,
    scorerTeam2: 0,
    team2: getTeamName(7),
    date: "17-05-2026",
    time: "12:00",
    location: "1",
    status: "played",
    group: 2,
    observation: "",
    events: [
        { type: "g", team: getTeamName(5), num: 7, qty: 2 },
        { type: "g", team: getTeamName(5), num: 9 },
      ]
  },
  // FECHA 3
    {
    id: 9,
    team1: getTeamName(1),
    scorerTeam1: 3,
    scorerTeam2: 5,
    team2: getTeamName(6),
    date: "17-05-2026",
    time: "13:00",
    location: "1",
    status: "played",
    group: 3,
    observation: "",
    events: [
      { type: "g", team: getTeamName(6), num: 10 },
      { type: "g", team: getTeamName(6), num: 21, qty: 3 },
      { type: "g", team: getTeamName(6), num: 7 },

      { type: "g", team: getTeamName(1), num: 7 },
      { type: "g", team: getTeamName(1), num: 6 },
      { type: "g", team: getTeamName(1), num: 11 },
    ]
  },
    {
    id: 10,
    team1: getTeamName(4),
    scorerTeam1: 1,
    scorerTeam2: 0,
    team2: getTeamName(8),
    date: "17-05-2026",
    time: "14:00",
    location: "1",
    status: "played",
    group: 3,
    observation: "",
    events: [
      { type: "g", team: getTeamName(4), num: 8 },
    ]
  },
    {
    id: 11,
    team1: getTeamName(2),
    scorerTeam1: 1,
    scorerTeam2: 2,
    team2: getTeamName(7),
    date: "17-05-2026",
    time: "15:00",
    location: "1",
    status: "played",
    group: 3,
    observation: "",
    events: [
      { type: "g", team: getTeamName(7), num: 19, qty: 2 },

      { type: "g", team: getTeamName(2), num: 11 },
    ]
  },
    {
    id: 12,
    team1: getTeamName(3),
    scorerTeam1: 1,
    scorerTeam2: 3,
    team2: getTeamName(5),
    date: "17-05-2026",
    time: "16:00",
    location: "1",
    status: "played",
    group: 3,
    observation: "",
    events: [
      { type: "g", team: getTeamName(5), num: 7 },
      { type: "g", team: getTeamName(5), num: 10 },
      { type: "g", team: getTeamName(5), num: 5 },

      { type: "g", team: getTeamName(3), num: 5 },
    ]
  },
   // FECHA 4
    {
    id: 13,
    team1: getTeamName(6),
    scorerTeam1: 2,
    scorerTeam2: 0,
    team2: getTeamName(7),
    date: "24-05-2026",
    time: "08:00",
    location: "1",
    status: "played",
    group: 4,
    observation: "",
    events: [
      { type: "g", team: getTeamName(6), num: 46 },
      { type: "g", team: getTeamName(6), num: 10 },
    ]
  },
    {
    id: 14,
    team1: getTeamName(1),
    scorerTeam1: 3,
    scorerTeam2: 0,
    team2: getTeamName(8),
    date: "24-05-2026",
    time: "09:00",
    location: "1",
    status: "played",
    group: 4,
    observation: "",
    events: [
      { type: "g", team: getTeamName(1), num: 11 },
      { type: "g", team: getTeamName(1), num: 14 },
    ]
  },
    {
    id: 15,
    team1: getTeamName(4),
    scorerTeam1: 0,
    scorerTeam2: 2,
    team2: getTeamName(5),
    date: "24-05-2026",
    time: "10:00",
    location: "1",
    status: "played",
    group: 4,
    observation: "",
    events: [
      { type: "g", team: getTeamName(5), num: 10 },
      { type: "g", team: getTeamName(5), num: 7 },
    ]
  },
    {
    id: 16,
    team1: getTeamName(2),
    scorerTeam1: 5,
    scorerTeam2: 1,
    team2: getTeamName(3),
    date: "24-05-2026",
    time: "11:00",
    location: "1",
    status: "played",
    group: 4,
    observation: "",
    events: [
      { type: "g", team: getTeamName(2), num: 11, qty: 3 },
      { type: "g", team: getTeamName(2), num: 14, qty: 2 },

      { type: "g", team: getTeamName(3), num: 10 },
    ]
  },
   // FECHA 5
    {
    id: 17,
    team1: getTeamName(8),
    scorerTeam1: 2,
    scorerTeam2: 10,
    team2: getTeamName(5),
    date: "24-05-2026",
    time: "12:00",
    location: "1",
    status: "played",
    group: 5,
    observation: "",
    events: [
      { type: "g", team: getTeamName(5), num: 9, qty: 3 },
      { type: "g", team: getTeamName(5), num: 10, qty: 2 },
      { type: "g", team: getTeamName(5), num: 7, qty: 5 },

      { type: "g", team: getTeamName(8), num: 99, qty: 2 },
    ]
  },
    {
    id: 18,
    team1: getTeamName(1),
    scorerTeam1: 2,
    scorerTeam2: 1,
    team2: getTeamName(7),
    date: "24-05-2026",
    time: "13:00",
    location: "1",
    status: "played",
    group: 5,
    observation: "",
    events: [
      { type: "g", team: getTeamName(1), num: 17, qty: 2 },

      { type: "g", team: getTeamName(7), num: 19 },
    ]
  },
    {
    id: 19,
    team1: getTeamName(6),
    scorerTeam1: 3,
    scorerTeam2: 1,
    team2: getTeamName(3),
    date: "24-05-2026",
    time: "14:00",
    location: "1",
    status: "played",
    group: 5,
    observation: "",
    events: [
      { type: "g", team: getTeamName(6), num: 20 },
      { type: "g", team: getTeamName(6), num: 21, qty: 2 },

      { type: "g", team: getTeamName(3), num: 25 },
    ]
  },
    {
    id: 20,
    team1: getTeamName(4),
    scorerTeam1: 1,
    scorerTeam2: 2,
    team2: getTeamName(2),
    date: "24-05-2026",
    time: "15:00",
    location: "1",
    status: "played",
    group: 5,
    observation: "",
    events: [
      { type: "g", team: getTeamName(2), num: 27 },
      { type: "g", team: getTeamName(2), num: 11 },

      { type: "g", team: getTeamName(4), num: 9 },
    ]
  },
   // FECHA 6
    {
    id: 21,
    team1: getTeamName(7),
    scorerTeam1: 0,
    scorerTeam2: 1,
    team2: getTeamName(3),
    date: "07-06-2026",
    time: "08:00",
    location: "1",
    status: "played",
    group: 6,
    observation: "W.O. a favor de Rodeo",
    events: [
      { type: "g", team: getTeamName(3), num: 1 },
    ]
  },
    {
    id: 22,
    team1: getTeamName(1),
    scorerTeam1: 1,
    scorerTeam2: 4,
    team2: getTeamName(5),
    date: "07-06-2026",
    time: "09:00",
    location: "1",
    status: "played",
    group: 6,
    observation: "",
    events: [
      { type: "g", team: getTeamName(5), num: 9, qty: 2 },
      { type: "g", team: getTeamName(5), num: 7, qty: 2 },

      { type: "g", team: getTeamName(1), num: 11 },
    ]
  },
    {
    id: 23,
    team1: getTeamName(8),
    scorerTeam1: 1,
    scorerTeam2: 7,
    team2: getTeamName(2),
    date: "07-06-2026",
    time: "10:00",
    location: "1",
    status: "played",
    group: 6,
    observation: "",
    events: [
      { type: "g", team: getTeamName(2), num: 10 },
      { type: "g", team: getTeamName(2), num: 11 },
      { type: "g", team: getTeamName(2), num: 27, qty: 2 },
      { type: "g", team: getTeamName(2), num: 17, qty: 2 },

      { type: "g", team: getTeamName(8), num: 99 },
    ]
  },
    {
    id: 24,
    team1: getTeamName(6),
    scorerTeam1: 2,
    scorerTeam2: 3,
    team2: getTeamName(4),
    date: "07-06-2026",
    time: "11:00",
    location: "1",
    status: "played",
    group: 6,
    observation: "",
    events: [
      { type: "g", team: getTeamName(4), num: 4 },
      { type: "g", team: getTeamName(4), num: 3 },
      { type: "g", team: getTeamName(4), num: 8 },

      { type: "g", team: getTeamName(6), num: 10 },
      { type: "g", team: getTeamName(6), num: 20 },
    ]

  },
   // FECHA 7
    {
    id: 25,
    team1: getTeamName(5),
    scorerTeam1: 0,
    scorerTeam2: 2,
    team2: getTeamName(2),
    date: "07-06-2026",
    time: "12:00",
    location: "1",
    status: "played",
    group: 7,
    observation: "",
    events: [
      { type: "g", team: getTeamName(5), num: 11 },
      { type: "g", team: getTeamName(5), num: 27 },
    ]
  },
    {
    id: 26,
    team1: getTeamName(1),
    scorerTeam1: 2,
    scorerTeam2: 0,
    team2: getTeamName(3),
    date: "07-06-2026",
    time: "13:00",
    location: "1",
    status: "played",
    group: 7,
    observation: "",
    events: [
      { type: "g", team: getTeamName(1), num: 5 },
      { type: "g", team: getTeamName(1), num: 6 },
    ]
  },
    {
    id: 27,
    team1: getTeamName(7),
    scorerTeam1: 3,
    scorerTeam2: 2,
    team2: getTeamName(4),
    date: "07-06-2026",
    time: "14:00",
    location: "1",
    status: "played",
    group: 7,
    observation: "",
    events: [
      { type: "g", team: getTeamName(7), num: 22, qty: 2 },
      { type: "g", team: getTeamName(7), num: 19 },

      { type: "g", team: getTeamName(4), num: 5 },
      { type: "g", team: getTeamName(4), num: 8 },
    ]

  },
    {
    id: 28,
    team1: getTeamName(8),
    scorerTeam1: 1,
    scorerTeam2: 2,
    team2: getTeamName(6),
    date: "07-06-2026",
    time: "15:00",
    location: "1",
    status: "played",
    group: 7,
    observation: "",
    events: [
      { type: "g", team: getTeamName(8), num: 99 },

      { type: "g", team: getTeamName(6), num: 20 },
      { type: "g", team: getTeamName(6), num: 21 },
    ]
  },
];
