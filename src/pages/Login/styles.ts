import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  padding: theme.spacing(2),
  boxSizing: "border-box",

  backgroundColor: theme.palette.background.default,
}));

export const LoginCard = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "420px",

  padding: theme.spacing(4),

  backgroundColor: theme.palette.background.paper,

  borderRadius: theme.spacing(2),

  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.10)",

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  textAlign: "center",

  gap: theme.spacing(0.5),

  marginBottom: theme.spacing(1),
}));

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  gap: theme.spacing(2),
}));

export const Field = styled(TextField)(() => ({
  width: "100%",
}));

export const ErrorMessage = styled("div")(({ theme }) => ({
  color: theme.palette.error.main,

  fontSize: "0.875rem",

  textAlign: "center",
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  width: "100%",
  minHeight: "48px",

  fontWeight: 700,

  marginTop: theme.spacing(1),
}));

export const ImageContent = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: theme.spacing(1.5),
  marginBottom: theme.spacing(2),

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& img": {
    width: "70%",
    height: "70%",
    objectFit: "cover",
  },
}));

export const CancelButton = styled(Button)(({ theme }) => ({
  width: "100%",
  minHeight: "48px",

  fontWeight: 700,

  marginTop: theme.spacing(1),
}));