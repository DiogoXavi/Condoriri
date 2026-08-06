import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

export const NotificationContainer = styled(Stack)(() => ({
  width: "100%",
  // margin: "1rem auto",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  boxSizing: "border-box",
}));

export const StyledAlert = styled(Alert)(() => ({
  fontSize: "1rem",
  padding: "1.25rem 1.5rem",
  "& .MuiAlertTitle-root": {
    fontWeight: 700,
    fontSize: "1.2rem",
    marginBottom: "0.3rem",
  },
  "& .date": {
    fontSize: "0.8rem",
    marginTop: "0.5rem",
    color: "#666",
    fontStyle: "italic",
  },
  "@media (max-width: 600px)": {    
    padding: "0.5rem 0.75rem",
  },
}));

export const DateContent = styled("div")(() => ({
  fontSize: "0.8rem",
  marginTop: "0.5rem",
  color: "#666",
  fontStyle: "italic",
}));
