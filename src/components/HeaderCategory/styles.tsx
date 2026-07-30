import styled from "@emotion/styled";
import { Chip, IconButton }from "@mui/material";
import { Box } from "@mui/material";

const darken = (color: string, amount: number) => {
  try {
    let col = color.startsWith("#") ? color.slice(1) : color;
    if (col.length === 3) {
      col = col.split("").map((c) => c + c).join("");
    }
    const num = parseInt(col, 16);
    let r = (num >> 16) - amount;
    let g = ((num >> 8) & 0x00ff) - amount;
    let b = (num & 0x0000ff) - amount;
    r = Math.max(0, r);
    g = Math.max(0, g);
    b = Math.max(0, b);
    return `rgb(${r}, ${g}, ${b})`;
  } catch {
    return color;
  }
};

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
    padding: "5px 20px",
  },

  "@media (max-width: 400px)": {
    padding: "8px 10px",
  },
}));

export const Logo = styled("img")({
  height: 55,
  objectFit: 'contain',
  borderRadius: '10%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  textDecoration: "none",

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
  fontSize: 25,
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
  const normal = darken(base, 30);
  const active = darken(base, 60);

  return {
    borderRadius: "20px",
    padding: "4px 10px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: selected ? active : normal,
    color: selected ? "rgba(10, 77, 129, 0.9)" : "rgba(4, 47, 81, 0.6)",
    "@media (max-width: 600px)": {
      fontSize: "0.75rem",
      padding: "3px 6px",
    },

    "&:hover": {
      backgroundColor: selected ? darken(base, 80) : darken(base, 50),
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
