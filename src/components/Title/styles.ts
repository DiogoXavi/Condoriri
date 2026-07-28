import styled from "@emotion/styled";
import { Divider } from "@mui/material";

export const TitleContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: '0.6rem',
}));

export const DividerLine = styled(Divider)(() => ({
  flexGrow: 1,
  height: "1.5px",
  backgroundColor: "#000",
  border: "none",
}));