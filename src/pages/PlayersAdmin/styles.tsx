import { styled } from "@mui/material";

export const Form = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 400,
  margin: "auto",
});

export const Input = styled("input")({
  padding: 10,
  borderRadius: 8,
  border: "1px solid #ccc",
});

export const Select = styled("select")({
  padding: 10,
  borderRadius: 8,
});

export const Button = styled("button")({
  padding: 12,
  background: "#22b7be",
  color: "white",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
});