// import { ITeam, IPlayerDB } from '../types/types'
import logoPucaLoma from "../assets/images/logoEquipos/pucaloma.webp";
import logoMontePampa from "../assets/images/logoEquipos/montePampa.webp";
import logoSivingaMayu from "../assets/images/logoEquipos/sivingamayu.webp";
import logoDefault from "../assets/images/logoEquipos/default.png";
import defaultProfile from "../assets/images/logoEquipos/defauldProfile.webp";
import logoKumuni from "../assets/images/logoEquipos/kumuni.webp";
import churquiPampa from "../assets/images/logoEquipos/churquiPampa.webp";
import quirpini from "../assets/images/logoEquipos/quirpini.webp";
import malliri from "../assets/images/logoEquipos/malliri.webp";
import japo from "../assets/images/logoEquipos/japo.webp";
import avichuca from "../assets/images/logoEquipos/avichuca.webp";
import palacio from "../assets/images/logoEquipos/palacio.webp";
import condoriri from "../assets/images/logoEquipos/condoriri.webp";
import huayllani from "../assets/images/logoEquipos/huayllani.png";
import tambokasa from "../assets/images/logoEquipos/tamboKasa.webp";
import rodeo from "../assets/images/logoEquipos/rodeo.webp";
import andamarca from "../assets/images/logoEquipos/andamarca.webp";
import churisaya from "../assets/images/logoEquipos/churisaya.webp";
import sanjose from "../assets/images/logoEquipos/sanjose.webp";
import murifaya from "../assets/images/logoEquipos/murifaya.webp";
import rodeoB from "../assets/images/logoEquipos/rodeoB.webp";
import phullaya from "../assets/images/logoEquipos/phullaya.webp";
import sakaPampa from "../assets/images/logoEquipos/sakaPampa.webp";
import orcoyo from "../assets/images/logoEquipos/orcoyo.webp";
import huayllaniGrande from "../assets/images/logoEquipos/huayllanigrande.webp";
import sabalaJr from "../assets/images/logoEquipos/sabalaJr.webp";
import cinteno from "../assets/images/logoEquipos/cinteno.webp";
import ocuri from "../assets/images/logoEquipos/ocuri.webp";
import corma from "../assets/images/logoEquipos/corma.webp";
import lajaKasa from "../assets/images/logoEquipos/lajaKasa.webp";
import chillagua from "../assets/images/logoEquipos/chillagua.webp";
import cruzMayu from "../assets/images/logoEquipos/cruzMayu.webp";
import punquina from "../assets/images/logoEquipos/punquina.png";
import tuntoco from "../assets/images/logoEquipos/tuntoco.webp";
import miscamayu from "../assets/images/logoEquipos/miscamayu.png";
import pucalomaB from "../assets/images/logoEquipos/pucaLomaB.png";

import type { IMatch, IPlayerDB } from "../types/types";


export const getLogo = (name: string) => {
  switch (name) {
    case "Puca Loma":
      return logoPucaLoma;
    case "Monte Pampa":
      return logoMontePampa;
    case "Sivinga Mayu":
      return logoSivingaMayu;
    case "Kumuni":
      return logoKumuni;
    case "Churqui Pampa":
      return churquiPampa;
    case "Quirpini":
      return quirpini;
    case "Malliri":
      return malliri;
    case "Japo":
      return japo;
    case "Avichuca":
      return avichuca;
    case "Palacio":
      return palacio;
    case "Condoriri":
      return condoriri;
    case "Huayllani":
      return huayllani;
    case "Tambo Kasa":
      return tambokasa;
    case 'Rodeo "A"':
      return rodeo;
    case 'Rodeo "B"':
      return rodeoB;
    case "Andamarca":
      return andamarca;
    case "Churisaya":
      return churisaya;
    case "San Jose T.":
      return sanjose;
    case "Murifaya":
      return murifaya;
    case "Phullaya":
      return phullaya;
    case "Saka Pampa":
      return sakaPampa;
    case "Orkoyo":
      return orcoyo;
    case "Huayllani Grande":
      return huayllaniGrande;
    case "Sabala Jr.":
      return sabalaJr;
    case "Default":
      return defaultProfile;
    case "Cinteño":
      return cinteno;
    case "Ocuri":
      return ocuri;
    case "Corma":
      return corma;
    case "Laja Kasa":
      return lajaKasa;
    case "Chillagua":
      return chillagua;
    case "Cruz Mayu":
      return cruzMayu
    case "Punquina":
      return punquina
    case "Tuntoco":
      return tuntoco
    case "Miska Mayu":
      return miscamayu
    case 'Puca Loma "B"':
      return pucalomaB
    default:
      return logoDefault;
  }
};
import { 
} from "../constants/teams/teams";

export const orderTable = (
  arr: {
    id: number;
    team: string;
    matchesPlayed: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    points: number;
  }[],
) => {
  return [...arr].sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    if (b.goalDifference !== a.goalDifference) {
      return b.goalDifference - a.goalDifference;
    }

    if (b.goalsFor !== a.goalsFor) {
      return b.goalsFor - a.goalsFor;
    }

    return a.team.localeCompare(b.team);
  });
};

export type IScorerComputed = {
  num: number;
  team: string;
  goals: number;
};

export const getTopScorersFromMatches = (
  matches: IMatch[]
): IScorerComputed[] => {
  const map = new Map<string, IScorerComputed>();

  matches.forEach((match) => {
    match.events?.forEach((event) => {
      if (event.type !== "g") return;

      const key = `${event.team}-${event.num}`;

      if (!map.has(key)) {
        map.set(key, {
          num: event.num,
          team: event.team,
          goals: 0,
        });
      }

      map.get(key)!.goals += event.qty || 1;
    });
  });

  return Array.from(map.values()).sort((a, b) => b.goals - a.goals);
};

type GoalDetail = {
  opponent: string;
  qty: number;
};

export const getGoalDetailsByPlayer = (
  matches: IMatch[],
  playerNumber: number,
  team: string
): GoalDetail[] => {
  const map = new Map<string, number>();

  matches.forEach((match) => {
    if (match.status !== "played") return;

    const isTeam1 = match.team1 === team;
    const opponent = isTeam1 ? match.team2 : match.team1;

    match.events?.forEach((event) => {
      if (event.type !== "g") return;
      if (Number(event.num) !== playerNumber) return;
      if (event.team !== team) return;

      if (!map.has(opponent)) {
        map.set(opponent, 0);
      }

      map.set(opponent, map.get(opponent)! + (event.qty || 1));
    });
  });

  return Array.from(map.entries()).map(([opponent, qty]) => ({
    opponent,
    qty,
  }));
};

type PlayerMap = Map<string, IPlayerDB>;

export const buildPlayerMap = (players: IPlayerDB[]): PlayerMap => {
  const map = new Map<string, IPlayerDB>();

  players.forEach((p) => {
    const key = `${p.team}-${p.number}`;
    map.set(key, p);
  });

  return map;
};
    