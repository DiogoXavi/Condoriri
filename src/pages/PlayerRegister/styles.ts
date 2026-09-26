import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import type { PaperProps } from "@mui/material";

export const Root = styled("main")(({ theme }) => ({
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "30px 20px",

  display: "flex",
  flexDirection: "column",
  gap: "20px",

  [theme.breakpoints.down("sm")]: {
    padding: "20px 12px",
  },
}));

export const HeaderContainer = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: "10px",
  display: "flex",
  //flexDirection: "column",
  borderRadius: "16px",
  backgroundColor: theme.palette.primary.light,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  gap: "12px",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const FormContainer = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: "30px",

  borderRadius: "16px",

  backgroundColor: theme.palette.background.paper,

  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",

  [theme.breakpoints.down("sm")]: {
    padding: "20px 15px",
  },
}));

export const FieldsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "16px",
  },
}));

export const ActionsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",

  marginTop: "30px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",

    "& button": {
      width: "100%",
    },
  },
}));

export const LogoContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  justifyContent: "center",
  flex: 1,

  [theme.breakpoints.down("sm")]: {
  },
}));

export const IfoContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  textAlign: "center",
flex: 2,
  [theme.breakpoints.down("sm")]: {
  },
}));
