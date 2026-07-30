import styled from "@emotion/styled";
import React from "react";

interface RootProps {
  category: string;
}

export const FixtureContainer = styled("div")<RootProps>(({ category }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor:
    category === "Juvenil"
      ? "#f1f9f5ff"
      : category === "Senior"
        ? "#e9f0f6ff"
        : category === "Damas"
          ? "#f8f2f9ff"
          : "#ffffff",
  "@media (max-width: 600px)": {
    margin: "0",
  },
}));

export const Root = styled("div")(() => ({
  alignItems: "center",
  padding: "0.5rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  width: "100%",
  maxWidth: '1250px',
  backgroundColor: "#fff",
  "@media (max-width: 600px)": {
  },
}));

export const TeamColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
});

export const ScorerColumn = styled("div")<{ align?: "left" | "right" }>(
  ({ align }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems:
      align === "left"
        ? "flex-start"
        : align === "right"
          ? "flex-end"
          : "center",
    flex: 1,
    fontSize: "2rem",
    fontWeight: "bold",
    color: "rgba(4, 47, 81, 0.9)",
    padding: "1rem",
    "@media (max-width: 600px)": {
      padding: 0,
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
  }),
);

export const ObservationContainer = styled("div")({
  marginTop: "0.5rem",
  fontWeight: "bold",
  color: "#b71c1c",
});

export const Logo = styled("img")({
  borderRadius: "25%",
  width: "72px",
  height: "72px",
  objectFit: "contain",
  "@media (max-width: 600px)": {
    width: "40PX",
    height: "40PX",
  },
});

export const TeamName = styled("span")({
  marginTop: "0.5rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  "@media (max-width: 600px)": {
    fontSize: "0.6rem",
  },
});

export const DetailsColumn = styled("div")({
  flex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.25rem",
});

export const DetailItem = styled("p")(() => ({
  margin: 0,
  fontSize: "0.9rem",
  "@media (max-width: 600px)": {
    fontSize: "0.6rem",
  },
}));

export const TitleItem = styled("p")(() => ({
  display: "flex",
  margin: 0,
  color: "#1abc9c",
  gap: "1rem",
  fontSize: "1rem",
  "@media (max-width: 600px)": {
    fontSize: "0.6rem",
    gap: "0.5rem",
  },
}));

export const SerieLabel = styled("span")<{ serie?: string }>(({ serie }) => {
  let color = "#1abc9c";

  if (serie === "A") {
    color = "#eaae17";
  } else if (serie === "B") {
    color = "#bb085c";
  }
  if (serie === "C") {
    color = "#0af812";
  }

  return {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "999px",
    border: `1.5px solid ${color}`,
    color: color,
    fontSize: "0.85rem",
    fontWeight: 600,
    lineHeight: 1,
    backgroundColor: "transparent",
    transition: "all 0.2s ease",

    "@media (max-width: 600px)": {
      fontSize: "0.65rem",
      padding: "3px 8px",
    },
  };
});

export const StatusLabel = styled("span")<{ statusType: string }>(({
  statusType,
}) => {
  let bg = "#ccc";
  let color = "#000";
  let extraStyles: React.CSSProperties = {};

  if (statusType === "played") {
    bg = "#cf6363";
    color = "#fff";
  } else if (statusType === "playing") {
    bg = "#4caf50";
    color = "#fff";
    extraStyles = {
      animation: "pulse 1s infinite ease-in-out",
    };
  } else if (statusType === "willPlay") {
    bg = "#707273ff";
    color = "#fff";
  } else if (statusType === "scheduled") {
    bg = "#1976d2";
    color = "#fff";
  } else if (statusType === "canceled") {
    bg = "#707273ff";
    color = "#fff";
  }

  return {
    display: "inline-block",
    padding: "0.25rem 0.5rem",
    borderRadius: "4px",
    fontWeight: "bold",
    backgroundColor: bg,
    color,
    ...extraStyles,
    "@keyframes pulse": {
      "0%": { transform: "scale(1)", opacity: 1 },
      "50%": { transform: "scale(1.10)", opacity: 0.8 },
      "100%": { transform: "scale(1)", opacity: 1 },
    },
  };
});
