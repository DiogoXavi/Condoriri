import { styled, alpha } from "@mui/material/styles";
import { IconButton, Button } from "@mui/material";

interface NavButtonProps {
  active?: boolean;
}

export const Container = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,

  padding: "6px 40px",

  boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.15)}`,

  "@media (max-width: 900px)": {
    flexWrap: "wrap",
    padding: "6px 20px",
  },

  "@media (max-width: 400px)": {
    padding: "6px 10px",
  },
}));

export const Logo = styled("img")({
  height: 55,
  objectFit: "contain",
  borderRadius: "10%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
});

export const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  cursor: "pointer",

  "@media (max-width: 600px)": {
    width: "100%",
    justifyContent: "center",
  },
});

export const ButtonContainer = styled("nav")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginLeft: "auto",

  "@media (max-width: 900px)": {
    width: "100%",
    justifyContent: "center",
    marginTop: "8px",
  },

  "@media (max-width: 600px)": {
    gap: "5px",
    justifyContent: "space-between",
  },
});

export const HomeButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  color: theme.palette.secondary.main,

  //border: `1px solid ${alpha(theme.palette.common.white, 0.3)}`,

  borderRadius: "12px",

  padding: "9px",

  transition: "all 0.2s ease",

  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.3),

    transform: "translateY(-2px)",

    boxShadow: `0 4px 10px ${alpha(
      theme.palette.common.black,
      0.15,
    )}`,
  },
}));

export const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<NavButtonProps>(({ theme, active }) => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: "14px",

  color: active
    ? theme.palette.secondary.contrastText
    : theme.palette.secondary.main,

  backgroundColor: active
    ? theme.palette.secondary.main
    : alpha(theme.palette.common.white, 0.12),

  // border: `1px solid ${
  //   active
  //     ? theme.palette.secondary.main
  //     : alpha(theme.palette.common.white, 0.25)
  // }`,

  borderRadius: "10px",
  padding: "8px 14px",
  minWidth: "auto",
  transition: "all 0.2s ease",

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    transform: "translateY(-2px)",
  },

  "@media (max-width: 600px)": {
    fontSize: "11px",
    padding: "7px 8px",
  },
}));