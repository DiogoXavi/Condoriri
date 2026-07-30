import type { ITeam } from "../../types/types";
import { sivingaMayu } from "../teams/SivingaMayu/equipos";
import { churquiPampa } from "../teams/ChurquiPampa/equipos";
import { avichuca } from "../teams/Avichuca/equipo";
import { condoriri } from "../teams/Condoriri/equipo";
import { tamboKasa } from "../teams/TamboKasa/equipo";
import { andamarca } from "../teams/Andamarca/equipo";
import { churisaya } from "../teams/Churisaya/equipo";
import { cinteno } from "../teams/Cinteno/equipo";
import { chillagua } from "../teams/Chillagua/equipo";
import { tuntoco } from "../teams/Tuntoco/equipo";

export const teams: ITeam[] = [
  sivingaMayu,
  churquiPampa,
  avichuca,
  condoriri,
  tamboKasa,
  andamarca,
  churisaya,
  cinteno,
  chillagua,
  tuntoco,
].flat();
