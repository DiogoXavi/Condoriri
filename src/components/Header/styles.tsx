import styled from "@emotion/styled";
import type { Theme } from "@mui/material/styles";
import { IconButton } from "@mui/material";

export const Container = styled("header")(({ theme }: { theme?: Theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  backgroundColor: theme?.palette.primary.main || "#1976d2",
  padding: "2px 40px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  "@media (max-width: 900px)": {
    display: "flow",
    justifyContent: "space-between",
    padding: "2px 20px",
  },

  "@media (max-width: 400px)": {
    display: "flow",
    padding: "5px 10px",
    justifyContent: "space-between",
  },
}));

export const Logo = styled("img")({
  height: 55,
  objectFit: "contain",
  borderRadius: "10%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});
export const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  cursor: "pointer",
  textDecoration: "none",
  "@media (max-width: 600px)": {
    justifyContent: "center",
  },
  "@media (max-width: 400px)": {
    justifyContent: "center",
  },
});

export const Title = styled("h1")({
  fontSize: 25,
  marginLeft: 10,
});

export const ButtonContainer = styled("div")({
  display: "flex",
  marginLeft: "auto",
  gap: "1rem",
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  "@media (max-width: 900px)": {
    justifyContent: "center",
    gap: "2rem",
    width: "100%",
  },
  "@media (max-width: 600px)": {
    justifyContent: "space-between",
    gap: "0",
    width: "100%",
  },
  "@media (max-width: 400px)": {
    justifyContent: "space-between",
    width: "100%",
  },
});

export const HomeButton = styled(IconButton)({
  backgroundColor: "rgba(4, 47, 81, 0.1)",
  borderRadius: "12px",
  padding: "10px",
  "&:hover": {
    backgroundColor: "rgba(4, 47, 81, 0.2)",
  },
});
export const NavButtonStyle = () => ({
  textTransform: "none",
  fontWeight: 500,
  backgroundColor: "rgba(4, 47, 81, 0.1)",
  borderRadius: "12px",
  lineHeight: "1",
  padding: "8px",
  "&:hover": {
    backgroundColor: "rgba(4, 47, 81, 0.2)",
  },
});
