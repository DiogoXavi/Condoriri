import { styled } from "@mui/material/styles";

export const Title = styled("h1")(() => ({
  fontSize: "24px",
  color: "#333",
}));
export const InfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  gap: "10px",
  padding: "10px",
  [theme.breakpoints.down("sm")]: {
    gap: "6px",
    padding: "0 8px 8px",
  },  
}));

export const Root = styled("div")(() => ({
}));

export const MessageNoTeams = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  padding: "40px",
  width: "100%",
  maxWidth: "1250px",
  gap: "20px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  boxShadow: theme.shadows[1],

  "&:hover": {
    boxShadow: theme.shadows[4],
  },

  [theme.breakpoints.down("lg")]: {
    padding: "10px",
    gap: "10px",
    width: "700px",
  },

  [theme.breakpoints.down("md")]: {
    width: "500px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));