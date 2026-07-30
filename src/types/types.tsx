export interface ITeamStanding {
  id: number;
  serie? : SerieType;
  team: string;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface INotification {
  id: number;
  title: string;
  description: string;
  status: 'success' | 'info' | 'warning' | 'error';
  date: string;
}

export interface IPlayer {
  id: number;
  name: string;
  fullName: string;
  DNI: string;
  number: number;
  position: string;
  image?: string;
}

export interface ITeamCategory {
  id: number;
  category: string;
  players: IPlayer[];
}

export interface ITeam {
  id: number;
  name: string;
  color: string;
  teams: ITeamCategory[];
  grupo?: string;       
  logo?: string;
  description?: string;
}

export interface ITeamCategoryItem {
  id: number;
  series: SerieType;
  name: string;
  url: string;
  logo: string;
  delegates: IDelegate[];
}

export interface IDelegate {
  id: number;
  name: string;
  contact: string;
  category: string;
}

export type MatchEvent = {
  type: "g" | "y" | "r";
  team: string;
  num: number; // últimos 5 dígitos
  qty?:  number;
  minute?: number;
};

 export type IMatchEvent = {
  type: "g" | "y" | "r";
  team: string;
  num: string;
};

 export type IScorerFixture = {
  num: string;
  team: string;
  goals: number;
};

export type IScorerComputed = {
  num: number;
  team: string;
  goals: number;
};

export interface IScorerUI {
  id: number;
  name: string;
  fullName: string;
  number: number;
  team: string;
  logoteam: string;
  goals: number;
  profile: string;
}



export interface IMatch {
  id: number;
  team1: string;
  team2: string;
  scorerTeam1: number;
  scorerTeam2: number;
  date: string;
  time: string;
  location: string;
  status:
    | "played"
    | "willPlay"
    | "playing"
    | "finished"
    | "scheduled"
    | "canceled"
    | "";
  group: number;
  observation: string;
  serie?: SerieType;
  events?: MatchEvent[];
  resultType?: "normal" | "wo_team1" | "wo_team2" | "double_wo";
}

export interface IFixtureCard {
  id: number;
  team1: string;
  team2: string;
  scorerTeam1: number;
  scorerTeam2: number;
  date: string;
  time: string;
  location: string;
  status:"played"| "willPlay" | "playing" | "finished" | "scheduled" | "canceled" | ""; 
  group: number,
  observation: string;
  category: string;
  serie?: SerieType;
  events?: MatchEvent[];
  playerMap?: Map<string, IPlayerDB>;
  isloading?: boolean;
}

export interface IScorer {
  id: number;
  name: string;
  fullName: string;
  number: number;
  team: string;
  logoteam: string;
  goals: number;
  gamesPlayed: number;
  profile: string;
}

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<{ outcome: 'accepted' | 'dismissed' }>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
export type SerieType = "A" | "B" | "C" |"all" | undefined | "";

export interface ISearchBoxProps {
  stGame: string;
  selectedCategory: string;
  setStGame: (value: string) => void;
  team: string;
  setTeam: (value: string) => void;
  setSerie: (value: string) => void;
  serie?: SerieType;
}

export interface ISearchSerieProp {
  serie: SerieType;
  selectedCategory: string;
  setSerie: (value: SerieType) => void;
}
export type CategoryType = "Juvenil" | "Senior" | "Damas" | "Infantil";

export interface IPlayerDB {
  id?: number;
  name: string;
  full_name: string;
  dni: string;
  image_url?: string;
  number: number;
  position: string;
  nationality: "boliviana" | "argentina";
  status: "enabled" | "disabled";
  birthdate: string; // YYYY-MM-DD
  team: string;
  category: "Juvenil" | "Senior" | "Damas" | "Infantil";
  likes: number;
  rating: number;
  created_at?: string;
}

export interface ITeamCategoryItem {
  id: number;
  name: string;
}