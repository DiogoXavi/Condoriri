import React from "react";
import { TeamMatchCard } from "../../components";

import { Card } from "./styles";

interface Props {
  team1: number;
  team2: number;
  result1?: number;
  result2?: number;
  position?: "left" | "right";
  isExpanded?: boolean;
}

const MatchCard: React.FC<Props> = ({
  team1,
  team2,
  result1,
  result2,
  position = "left",
  isExpanded = true,
}) => {
  return (
    <Card>
      <TeamMatchCard
        team={team1}
        result={result1}
        isExpanded={isExpanded}
        position={position}
      />
      <TeamMatchCard
        team={team2}
        result={result2}
        isExpanded={isExpanded}
        position={position}
      />
    </Card>
  );
};

export default MatchCard;
