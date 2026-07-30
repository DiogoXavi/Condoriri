import type { ITeam } from "../../types/types";
import { kumuni } from "../teams/Kumuni/equipos";
import { montePampa } from "../teams/MontePampa/equipos";
import { pucaLoma } from "../teams/PucaLoma/equipos";
import { sivingaMayu } from "../teams/SivingaMayu/equipos";
import { churquiPampa } from "../teams/ChurquiPampa/equipos";
import { quirpini } from "../teams/Quirpini/equipo";
import { malliri } from "../teams/Malliri/equipo";
import { japo } from "../teams/Japo/equipo";
import { avichuca } from "../teams/Avichuca/equipo";
import { palacio } from "../teams/Palacio/equipo";
import { condoriri } from "../teams/Condoriri/equipo";
import { huayllani } from "../teams/Huayllani/equipo";
import { tamboKasa } from "../teams/TamboKasa/equipo";
import { rodeo } from "../teams/Rodeo/equipo";
import { rodeoB } from "../teams/RodeoB/equipo";
import { andamarca } from "../teams/Andamarca/equipo";
import { churisaya } from "../teams/Churisaya/equipo";
import { sanJoseT } from "../teams/SanJose/equipo";  
import { murifaya } from "../teams/Murifaya/equipo";
import { corma } from "../teams/Corma/equipo";
import { lajaKasa } from "../teams/LajaKasa/equipo";
import { cinteno } from "../teams/Cinteno/equipo";
import { phullaya } from "../teams/Phullaya/equipo";
import { sakaPampa } from "../teams/SakaPampa/equipo";
import { orcoyo } from "../teams/Orcoyo/equipo";
import { huayllaniGrande } from "../teams/HuayllaniGrande/equipo";
import { sabalaJr } from "../teams/Sabala/equipo";  
import { chillagua } from "../teams/Chillagua/equipo";
import { cruzMayu } from "../teams/CruzMayu/equipo";
import { ocuri } from "../teams/Ocuri/equipo";
import { punquina } from "../teams/Punquina/equipo";
import { tuntoco } from "../teams/Tuntoco/equipo";
import { miskamayu } from "../teams/MiskaMayu/equipo";

export const teams: ITeam[] = [
  pucaLoma,
  montePampa,
  sivingaMayu,
  churquiPampa,
  kumuni,
  quirpini,
  malliri,
  japo,
  avichuca,
  palacio,
  condoriri,
  huayllani,
  tamboKasa,
  rodeo,
  rodeoB,
  andamarca,
  churisaya,
  sanJoseT,
  murifaya,
  phullaya,
  sakaPampa,
  orcoyo,
  huayllaniGrande,
  sabalaJr,
  corma,
  lajaKasa,
  cinteno,
  chillagua,
  cruzMayu,
  punquina,
  tuntoco,
  ocuri,
  miskamayu,
].flat();
