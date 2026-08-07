import styled from "@emotion/styled";

interface PlayerCardWrapperProps {
  teamcolor?: string;
}

export const PlayerCardWrapper = styled("div")<PlayerCardWrapperProps>(
  ({ teamcolor }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    alignItems: "center",
    borderRadius: "12px",
    overflow: "hidden",
    width: "100%",
    maxWidth: "1200px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    transition: "all 0.25s ease",
    padding: "4px",
    gap: "14px",

    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      width: "5px",
      height: "100%",
      background: `linear-gradient(
        180deg,
        ${teamcolor || "#1abc9c"},
        rgba(255,255,255,0.2),
        ${teamcolor || "#1abc9c"}
      )`,
      boxShadow: `0 0 12px ${teamcolor || "#1abc9c"}`,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "5px",
      height: "100%",
      background: `linear-gradient(
        180deg,
        ${teamcolor || "#1abc9c"},
        rgba(255,255,255,0.2),
        ${teamcolor || "#1abc9c"}
      )`,
      boxShadow: `0 0 12px ${teamcolor || "#1abc9c"}`,
    },

    ":hover": {
      boxShadow: `0 6px 18px ${teamcolor || "#1abc9c"}55`,
      transform: "translateY(-2px)",
    },

    "@media (max-width: 600px)": {
      gap: "4px",
    },
  }),
);

export const PlayerImage = styled("img")({
 justifyItems: "center",
  width: "6rem",
  height: "6rem",
  objectFit: "cover",
  marginLeft: "5rem",
  borderRadius: "50%",
  margin: "8px",
  "@media (max-width: 600px)": {
    width: "4rem",
    height: "4rem",
    marginLeft: "1.5rem",
  },
  "@media (max-width: 900px)": {
    width: "5.5rem",
    height: "5.5rem",
    marginLeft: "1.5rem",
  },
});

export const PlayerInfo = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
  textAlign: "center",
});

export const PlayerTitle = styled("h3")({
  margin: "auto",
  fontSize: "20px",
  fontWeight: "bold",
  fontFamily: "sans-serif",
  textTransform: "uppercase",
});

export const PlayerText = styled('p')(() => ({
  margin: '2px 0',
  fontSize: '14px',
  color: '#444',
}));

export const PlayerName = styled("p")(() => ({
  margin: "2px 0",
  fontSize: "15px",
  color: "#1abc9c",
  fontFamily: "sans-serif",
  fontStyle: "italic",
}));

export const PositionContainmer = styled("div")({
  display: "flex",
  marginTop: "8px",
  gap: "10px",
});
