import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

export const Container = styled(Box)({
  maxWidth: 500,
  margin: "0 auto",
  padding: "20px",
});

export const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const StyledField = styled(TextField)({
  background: "#fff",
  borderRadius: 8,
});