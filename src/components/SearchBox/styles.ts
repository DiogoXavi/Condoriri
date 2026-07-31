import { styled } from "@mui/material/styles";

export const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: "1250px",
  margin: "0 auto",
  flexWrap: "wrap",
  gap: "10px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
    padding: "8px",
    gap: "10px",
  },
}));

export const Title = styled("h1")(({ theme }) => ({
  fontSize: "24px",
  color: "#333",
  marginBottom: "10px",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

export const RadioGroupContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "10px",

  "& .MuiFormControlLabel-label": {
    fontSize: "0.9rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5rem",
    },
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const SelectContainer = styled("div")(({ theme }) => ({
  width: "310px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
