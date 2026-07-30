import { getLogo } from "../../tools/tools";
import { getProfile as getProfilePL } from "../teams/PucaLoma/images/tools";
import { getProfile as getProfileKM } from "../teams/Kumuni/images/tools";

export const seniorRaw = [
  // {
  //   id: 2,
  //   name: "Surita",
  //   fullName: "Soraide Albarado",
  //   number: 7,
  //   team: "Monte Pampa",
  //   logoteam: getLogo("Monte Pampa"),
  //   goals: 4,
  //   gamesPlayed: 1,
  //   profile: getProfileMP("69"),
  // },
  {
    id: 6,
    name: "Noelia",
    fullName: "Irma Noelia Mamani Rodriguez",
    number: 13,
    team: "Puca Loma",
    logoteam: getLogo("Puca Loma"),
    goals: 10,
    gamesPlayed: 1,
    profile: getProfilePL("73"),
  },
  {
    id: 6,
    name: "Elsa",
    fullName: "Elsa Condori Calizaya",
    number: 13,
    team: "Kumuni",
    logoteam: getLogo("Kumuni"),
    goals: 6,
    gamesPlayed: 1,
    profile: getProfileKM("67"),
  },
];
export const damas = [...seniorRaw].sort((a, b) => {
  if (b.goals !== a.goals) return b.goals - a.goals;
  return a.fullName.localeCompare(b.fullName, "es", { sensitivity: "base" });
});
