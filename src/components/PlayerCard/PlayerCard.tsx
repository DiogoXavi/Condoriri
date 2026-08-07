import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PlayerCardWrapper, 
  PlayerImage, 
  PlayerInfo, 
  PlayerTitle, 
  PlayerText, 
  PositionContainmer, 
  PlayerName
} from './styles';
import type { ITeam } from '../../types/types';
import { teams } from '../../constants/teams/teams';

interface PlayerCardProps {
  idTeam?: number | string;
  id: number | string; 
  category?: string; 
  name: string;
  fullName?: string;
  DNI: string;
  image: string;
  number: number;
  position: string;
  index?: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  idTeam,
  id,
  category,
  name,
  fullName,
  DNI,
  image,
  number,
  position,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/player-detail?idPlayer=${id}&idTeam=${idTeam}&category=${category}`);
  };

  const getTeamColor = (id?: number | string) => {
  const team = teams.find((t: ITeam) => t.id === id);
  return team?.color || "#1abc9c";
};

  return (
    <PlayerCardWrapper onClick={handleClick} teamcolor={getTeamColor(idTeam)} >
      <PlayerImage src={image} alt={name} loading="lazy"/>
      <PlayerInfo>
        <PlayerTitle>{name} <strong>({number})</strong></PlayerTitle>
        <PlayerName>{fullName}</PlayerName>
        <PositionContainmer>
          <PlayerText>{position}</PlayerText>
          <PlayerText><strong>COD:</strong> { String(DNI).slice(-5)}</PlayerText>
        </PositionContainmer>
      </PlayerInfo>
    </PlayerCardWrapper>
  );
};

export default PlayerCard;
