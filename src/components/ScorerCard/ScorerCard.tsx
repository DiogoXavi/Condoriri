import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Collapse, Box, Typography } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getLogo } from "../../tools/tools";

import {
  PlayerCardWrapper,
  PlayerImage,
  PlayerInfo,
  PlayerTitle,
  PlayerText,
  PositionContainmer,
  PlayerName,
  LogoImage,
  CardContainer,
  TitleTeam,
  Logo,
  TeamName,
  OponentGoals,
  GoalRow,
} from "./styles";
import type { ITeam } from "../../types/types";
import { teams } from "../../constants/teams/teams";

type GoalDetail = {
  opponent: string;
  qty: number;
};

interface PlayerCardProps {
  id: number | string;
  name: string;
  fullName?: string;
  image: string;
  logoTeam: string;
  number: number;
  goals: number;
  teamName: string;
  goalDetails: GoalDetail[];
  category: string;
}

const ScorerCard: React.FC<PlayerCardProps> = ({
  id,
  name,
  fullName,
  image,
  logoTeam,
  number,
  goals,
  teamName,
  goalDetails = [],
  category,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const getIdTeam = (name: string) => {
    const team = teams.find((t: ITeam) => t.name === name);
    return team ? team.id : null;
  };

  const getTeamColor = (name: string) => {
    const team = teams.find((t: ITeam) => t.name === name);
    return team ? team.color : "#000";
  };

  const handleClick = () => {
    const idTeam = getIdTeam(teamName);
    navigate(
      `/player-detail?idPlayer=${id}&idTeam=${idTeam}&category=${category}`,
    );
  };

  return (
    <>
      <CardContainer>
        <PlayerCardWrapper
          onClick={handleClick}
          teamcolor={getTeamColor(teamName)}
        >
          <PlayerImage src={image} alt={name} />
          <LogoImage src={logoTeam} alt={teamName} />

          <PlayerInfo>
            <PositionContainmer>
              <PlayerText>
                TOTAL GOLES: <strong>{goals}</strong>
              </PlayerText>
            </PositionContainmer>

            <PlayerName>
              {fullName ? `${fullName} (${number})` : `Jugador - ${number}`}
            </PlayerName>
            <PlayerTitle>
              <strong>{teamName}</strong>
            </PlayerTitle>
          </PlayerInfo>
        </PlayerCardWrapper>
        {/* HEADER ACCORDION */}
        <Box
          onClick={() => setOpen(!open)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2">Ver detalles</Typography>

          <IconButton size="small">
            {open ? <FaEye /> : <FaEyeSlash />}
          </IconButton>
        </Box>

        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          style={{
            backgroundColor: "#fff",
            width: "100%",
            margin: "8px",
            padding: "12px",
            borderRadius: "0 0 8px 8px",
            marginTop: "-8px",
          }}
        >
          <Box sx={{ mt: 1 }}>
            {goalDetails.length === 0 ? (
              <Typography variant="body2">Sin goles registrados</Typography>
            ) : (
              goalDetails.map((goal, index) => (
                <GoalRow key={index}>
                  <TitleTeam>
                    <Logo src={getLogo(goal.opponent)} alt={goal.opponent} />

                    <TeamName>{goal.opponent}</TeamName>
                  </TitleTeam>

                  <OponentGoals>⚽ {goal.qty}</OponentGoals>
                </GoalRow>
              ))
            )}
          </Box>
        </Collapse>
      </CardContainer>
    </>
  );
};

export default ScorerCard;
