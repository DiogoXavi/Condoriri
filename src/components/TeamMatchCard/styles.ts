import styled from "@emotion/styled";
import theme from "../../theme";
type CardProps = {
  position: "left" | "right";
};

export const Card = styled("div", {
  shouldForwardProp: (prop) => prop !== "position",
})<CardProps>(({ position }) => ({
  display: "flex",
  flexDirection:
    position === "right"
      ? "row-reverse"
      : "row",

  justifyContent:
    position === "left"
      ? "flex-start"
      : "end",

  gap: "10px",
  background: "#fff",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "12px",
  padding: "10px 14px",
  minWidth: "220px",
  maxWidth: "400px",

  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",

  transition: "0.2s ease",

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
  },

  "@media (max-width: 600px)": {
    minWidth: "8px",
    maxWidth: "200px",
    padding: "1px",
    gap: "0px",
  },
}));
  

export const TeamLogo = styled("img")({
  width: "25px",
  height: "25px",
  objectFit: "contain",
});

type TeamInfoProps = {
  position: "left" | "right";
};

export const TeamInfo = styled("div")<TeamInfoProps>(
  ({ position }) => ({
    display: "flex",
    gap: "5px",
    alignItems: "center",

    flexDirection:
      position === "right"
        ? "row-reverse"
        : "row",
  })
);

export const TeamName = styled("span")({
  fontWeight: 700,
  fontSize: "8px",
  color: "#0b2545",
});

export const Description = styled("span")({
  fontSize: "9px",
  color: "#666",
});

export const Result = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "15px",
  borderRadius: "999px",
  background: "#6ce9ef",
  fontWeight: 600,
  fontSize: "10px",
  color: "#0b2545",
});

export const GoalRow = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "center",
  gap: "12px",
  padding: "5px 6px",
  borderRadius: "10px",
  background: "#f9f9f9",
  border: `1px solid #ddd`,
  marginBottom: "4px",
  transition: "0.2s ease",

  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
});