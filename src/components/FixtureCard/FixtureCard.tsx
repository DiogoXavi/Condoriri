import React, { useState } from "react";
import {
  FixtureContainer,
  TeamColumn,
  Logo,
  TeamName,
  DetailsColumn,
  DetailItem,
  ScorerColumn,
  ObservationContainer,
  Root,
  StatusLabel,
  TitleItem,
  SerieLabel,
} from "./styles";
import { getLogo } from "../../tools/tools";
import type { IFixtureCard, MatchEvent } from "../../types/types";
import { Typography } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FixtureCard: React.FC<IFixtureCard> = ({
  id,
  team1,
  team2,
  scorerTeam1,
  scorerTeam2,
  date,
  time,
  location,
  status,
  group,
  observation,
  category,
  serie,
  events,
  playerMap,
  isloading,
}) => {
  const [open, setOpen] = useState(false);

  const isExpandable = status === "played" && events && events.length > 0;

  const team1Events: MatchEvent[] =
    events?.filter((e) => e.team === team1) || [];

  const team2Events: MatchEvent[] =
    events?.filter((e) => e.team === team2) || [];

  const getIcon = (type: MatchEvent["type"]) => {
    switch (type) {
      case "g":
        return "⚽";
      case "y":
        return "🟨";
      case "r":
        return "🟥";
      default:
        return "";
    }
  };

  const renderStatusLabel = () => {
    if (!status || status.trim() === "") return null;

    switch (status) {
      case "played":
        return <StatusLabel statusType="played">FINALIZADO</StatusLabel>;
      case "playing":
        return <StatusLabel statusType="playing">EN JUEGO</StatusLabel>;
      case "willPlay":
        return <StatusLabel statusType="willPlay">PENDIENTE</StatusLabel>;
      case "scheduled":
        return <StatusLabel statusType="scheduled">PROGRAMADO</StatusLabel>;
      case "canceled":
        return <StatusLabel statusType="canceled">CANCELADO</StatusLabel>;
      default:
        return null;
    }
  };

  const getPhaseName = (group: number) => {
    switch (group) {
      case 25:
        return "OCTAVOS";
      case 26:
        return "CUARTOS";
      case 27:
        return "SEMIFINAL";
      case 28:
        return "3° PUESTO";
        case 29:
        return "FINAL";
      default:
        return null;
    }
  };

  const renderEvents = (eventsList: MatchEvent[]) => {
    if (isloading) {
      return <div>Cargando eventos...</div>;
    }

    if (eventsList.length === 0) return <div>—</div>;

    return eventsList.map((e, i) => {
      const key = `${e.team}-${e.num}`;
      const player = playerMap?.get(`${category}-${e.team}-${e.num}`);

      return (
        <div
          key={`${key}-${i}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "4px",
          }}
        >
          <img
            src={player?.image_url || getLogo("Default")}
            alt={player?.name || "player"}
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span style={{ fontWeight: 600, fontSize: "0.65em" }}>
            {player?.full_name || `#${e.num}`}{" "}
            {player?.full_name && `(${player.number})`}
          </span>
          <div style={{ display: "flex", gap: "3px" }}>
            {Array.from({ length: e.qty || 1 }).map((_, idx) => (
              <span key={idx}>{getIcon(e.type)}</span>
            ))}
          </div>
        </div>
      );
    });
  };

  const phaseName = getPhaseName(group);

  return (
    <Root
      onClick={() => isExpandable && setOpen(!open)}
      style={{
        cursor: isExpandable ? "pointer" : "default",
        transition: "0.2s",
      }}
    >
      <FixtureContainer category={category}>
        <TeamColumn>
          <Logo src={getLogo(team1)} alt={team1} />
          <TeamName>{team1}</TeamName>
        </TeamColumn>

        {["played", "playing"].includes(status) && (
          <ScorerColumn align="left">{scorerTeam1}</ScorerColumn>
        )}

        <DetailsColumn>
          {group === 0 && (
            <TitleItem>
              <strong>RE-COPA</strong>
              <SerieLabel serie={"C"}>FINAL</SerieLabel>
            </TitleItem>
          )}

          {group > 0 && (
            <TitleItem>
              <strong>
                {phaseName
                  ? phaseName
                  : `${status === "played" ? "F -" : "Fecha:"} ${group}`}
              </strong>

              {serie && (
                <SerieLabel serie={serie}>
                  {group >= 25 ? `G: ${serie}` : `Serie: ${serie}`}
                </SerieLabel>
              )}
            </TitleItem>
          )}

          {status === "played" ? (
            <DetailItem>
              <strong>{date || "__/__/____"}</strong>
            </DetailItem>
          ) : (
            <DetailItem>
              <strong>Hora:</strong> {time || "__:__"} <strong>|</strong>{" "}
              {date || "__/__/____"}
            </DetailItem>
          )}

          {status !== "played" && (
            <DetailItem>
              <strong>Cancha:</strong> {location || "___"}
            </DetailItem>
          )}
          <DetailItem
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            {renderStatusLabel()}

            {isExpandable && (open ? <FaEye /> : <FaEyeSlash />)}
          </DetailItem>
        </DetailsColumn>

        {["played", "playing"].includes(status) && (
          <ScorerColumn align="right">{scorerTeam2}</ScorerColumn>
        )}

        <TeamColumn>
          <Logo src={getLogo(team2)} alt={team2} />
          <TeamName>{team2}</TeamName>
        </TeamColumn>
      </FixtureContainer>

      {isExpandable && open && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px 0",
            background: "#f9f9f9",
            borderTop: "1px solid #eee",
            gap: "8px",
          }}
        >
          <div>{renderEvents(team1Events)}</div>
          <div>{renderEvents(team2Events)}</div>
        </div>
      )}
      {observation && observation.trim() !== "" && (
        <ObservationContainer>{observation}</ObservationContainer>
      )}

      <Typography variant="caption" align="center" color="textSecondary">
        ID: {id}
      </Typography>
    </Root>
  );
};

export default FixtureCard;
