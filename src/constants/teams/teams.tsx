import type { ITeam } from "../../types/types";
import { kumuni } from "./Kumuni/equipos";
import { montePampa } from "./MontePampa/equipos";
import { pucaLoma } from "./PucaLoma/equipos";
import { sivingaMayu } from "./SivingaMayu/equipos";
import { churquiPampa } from "./ChurquiPampa/equipos";
import { quirpini } from "./Quirpini/equipo";
import { malliri } from "./Malliri/equipo";
import { japo } from "./Japo/equipo";
import { avichuca } from "./Avichuca/equipo";
import { palacio } from "./Palacio/equipo";
import { condoriri } from "./Condoriri/equipo";
import { huayllani } from "./Huayllani/equipo";
import { tamboKasa } from "./TamboKasa/equipo";
import { rodeo } from "./Rodeo/equipo";
import { rodeoB } from "./RodeoB/equipo";
import { andamarca } from "./Andamarca/equipo";
import { churisaya } from "./Churisaya/equipo";
import { sanJoseT } from "./SanJose/equipo";  
import { murifaya } from "./Murifaya/equipo";
import { corma } from "./Corma/equipo";
import { lajaKasa } from "./LajaKasa/equipo";
import { cinteno } from "./Cinteno/equipo";
import { phullaya } from "./Phullaya/equipo";
import { sakaPampa } from "./SakaPampa/equipo";
import { orcoyo } from "./Orcoyo/equipo";
import { huayllaniGrande } from "./HuayllaniGrande/equipo";
import { sabalaJr } from "./Sabala/equipo";  
import { chillagua } from "./Chillagua/equipo";
import { cruzMayu } from "./CruzMayu/equipo";
import { ocuri } from "./Ocuri/equipo";
import { punquina } from "./Punquina/equipo";
import { tuntoco } from "./Tuntoco/equipo";
import { miskamayu } from "./MiskaMayu/equipo";

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
