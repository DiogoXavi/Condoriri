import { getLogo } from "../../tools/tools";
import { getProfile as getProfileMP } from "../teams/MontePampa/images/tools";
import { getProfile as getProfileCP } from "../teams/ChurquiPampa/images/tools";
import { getProfile as getProfileKM } from "../teams/Kumuni/images/tools";
import { getProfile as getProfilePL } from "../teams/PucaLoma/images/tools";
import { getProfile as getProfileSM } from "../teams/SivingaMayu/images/tools";

const juvenilRaw = [
  {
    id: 1,
    name: "Alex",
    fullName: "Alex Mollo Rafael",
    number: 10,
    team: "Monte Pampa",
    logoteam: getLogo("Monte Pampa"),
    goals: 15,
    gamesPlayed: 1,
    profile: getProfileMP("16"),
  },
  {
    id: 4,
    name: "A. Cruz",
    fullName: "Aldair Cruz",
    number: 10,
    team: "Churqui Pampa",
    logoteam: getLogo("Churqui Pampa"),
    goals: 7,
    gamesPlayed: 1,
    profile: getProfileCP("17"),
  },
  //
  {
    id: 8,
    name: "Klinton",
    fullName: "Klinton Quira",
    number: 30,
    team: "Kumuni",
    logoteam: getLogo("Kumuni"),
    goals: 5,
    gamesPlayed: 1,
    profile: getProfileKM("6"),
  },
  {
    id: 9,
    name: "J. Clemente",
    fullName: "Juan Clemente",
    number: 20,
    team: "Puca Loma",
    logoteam: getLogo("Puca Loma"),
    goals: 6,
    gamesPlayed: 1,
    profile: getProfilePL("97200"),
  },
  {
    id: 12,
    name: "Gabriel",
    fullName: "Gabriel Felipe Huallpa",
    number: 9,
    team: "Kumuni",
    logoteam: getLogo("Kumuni"),
    goals: 7,
    gamesPlayed: 1,
    profile: getProfileKM("9"),
  },
  {
    id: 13,
    name: "Brian",
    fullName: "Brian Calizaya Aguirre",
    number: 7,
    team: "Kumuni",
    logoteam: getLogo("Kumuni"),
    goals: 5,
    gamesPlayed: 1,
    profile: getProfileSM("8"),
  },
];

export const juvenil = [...juvenilRaw].sort((a, b) => {
  if (b.goals !== a.goals) return b.goals - a.goals;
  return a.fullName.localeCompare(b.fullName, "es", { sensitivity: "base" });
});
