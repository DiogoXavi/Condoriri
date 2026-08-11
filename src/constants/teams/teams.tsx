import type { ITeam } from "../../types/types";
import { condoriri } from "../teams/Condoriri/equipo";
import { palacio } from "./Palacio/equipo";

export const teams: ITeam[] = [
  condoriri,
  palacio,
].flat();
