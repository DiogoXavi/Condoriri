import styled from "@emotion/styled";
import { Chip, IconButton, Box } from "@mui/material";
import { darken, getContrastRatio } from "@mui/material/styles";

interface ContainerProps {
  color?: string;
}

export const BoxContainer = styled(Box)<ContainerProps>(({ color }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: color || "#1976d2",
  padding: "2px 40px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",

  "@media (max-width: 600px)": {
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 20px",
  },

  "@media (max-width: 400px)": {
    padding: "8px 10px",
  },
}));

export const Logo = styled("img")({
  width: 55,
  height: 55,
  objectFit: "contain",
  borderRadius: "50%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

export const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",

  "@media (max-width: 600px)": {
    justifyContent: "center",
    marginBottom: 10,
  },
});

export const TitleContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "between",
  gap: "3rem",
});

export const Title = styled("h1")({
  fontSize: 21,
  marginLeft: 10,
  color: "rgba(4, 47, 81, 0.9)",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
});

export const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "activecolor" && prop !== "selected",
})<{ activecolor?: string; selected?: boolean }>(({ activecolor, selected }) => {
  const base = activecolor || "#1976d2";

  const normal = darken(base, 0.2);
  const active = darken(base, 0.35);

  const textColor =
    getContrastRatio(base, "#fff") > 4.5 ? "#fff" : "#000";

  return {
    borderRadius: "20px",
    padding: "4px 12px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.25s ease",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: selected ? active : normal,
    color: textColor,

    "&:hover": {
      backgroundColor: selected
        ? darken(base, 0.45)
        : darken(base, 0.3),
      transform: "scale(1.05)",
    },
  };
});

export const HomeButton = styled(IconButton)({
  backgroundColor: "rgba(4, 47, 81, 0.1)",
  borderRadius: "12px",
  padding: "10px",
  "&:hover": {
    backgroundColor: "rgba(4, 47, 81, 0.2)",
  },
});
