import type { IMatch, ITeamStanding, SerieType } from "../types/types";

export const generateTable = (
  matches: IMatch[],
  baseTable: ITeamStanding[],
): ITeamStanding[] => {
  const table: ITeamStanding[] = baseTable.map((t) => ({
    ...t,
    matchesPlayed: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: t.points || 0,
  }));

  const getTeam = (name: string, serie?: SerieType) => {
    return table.find((t) => {
      if (t.team !== name) return false;

      if (!t.serie || !serie || serie === "all") return true;

      return t.serie === serie;
    });
  };

  matches.forEach((match) => {
    if (match.status !== "played") return;

    const resultType = match.resultType || "normal";

    const serie: SerieType =
      match.serie === "A" || match.serie === "B" ? match.serie : undefined;

    const teamA = getTeam(match.team1, serie);
    const teamB = getTeam(match.team2, serie);

    if (!teamA || !teamB) return;

    // if (resultType === "double_wo") {
    //   teamA.losses++;
    //   teamB.losses++;

    //   teamA.matchesPlayed++;
    //   teamB.matchesPlayed++;

    //   return;
    // }

    // PJ
    teamA.matchesPlayed++;
    teamB.matchesPlayed++;

    // GOLES
    teamA.goalsFor += match.scorerTeam1;
    teamA.goalsAgainst += match.scorerTeam2;

    teamB.goalsFor += match.scorerTeam2;
    teamB.goalsAgainst += match.scorerTeam1;

    // RESULTADO
    if (resultType === "wo_team1") {
      teamA.wins++;
      teamB.losses++;
      teamA.points += 3;
    } else if (resultType === "wo_team2") {
      teamB.wins++;
      teamA.losses++;
      teamB.points += 3;
    } else if (resultType === "double_wo") {
      teamA.losses++;
      teamB.losses++;
    } else {
      // RESULTADO NORMAL POR GOLES
      if (match.scorerTeam1 > match.scorerTeam2) {
        teamA.wins++;
        teamB.losses++;
        teamA.points += 3;
      } else if (match.scorerTeam1 < match.scorerTeam2) {
        teamB.wins++;
        teamA.losses++;
        teamB.points += 3;
      } else {
        teamA.draws++;
        teamB.draws++;
        teamA.points += 1;
        teamB.points += 1;
      }
    }
  });

  table.forEach((t) => {
    t.goalDifference = t.goalsFor - t.goalsAgainst;
  });

  return table;
};
