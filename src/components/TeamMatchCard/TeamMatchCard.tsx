import React from "react";

import { Card, TeamLogo, TeamInfo, TeamName, Result } from "./styles";
import { getTeamLogoById, getTeamNameById } from "../../tools/geters";

interface Props {
  team: number;
  result?: number;
  position?: "left" | "right";
  isExpanded?: boolean;
}

const TeamMatchCard: React.FC<Props> = ({
  team,
  result,
  position = "left",
  isExpanded = true,
}) => {
  return (
    <Card position={position}>
      <TeamLogo src={getTeamLogoById(team)} alt={getTeamNameById(team)} />

      <TeamInfo position={position}>
        {isExpanded && (
          <TeamName>
            {getTeamNameById(team).length > 12 ? `${getTeamNameById(team).slice(0, 11)}.` : getTeamNameById(team)}
          </TeamName>
        )}

        <Result>{result}</Result>
      </TeamInfo>
    </Card>
  );
};

export default TeamMatchCard;
