import styled from "@emotion/styled";

export const Card = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  background: "#ffffff",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "18px",
  padding: "14px",
  minWidth: "220px",
  maxWidth: "400px",

  boxShadow:
    "0 4px 12px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)",
  transition:
    "transform 0.25s ease, box-shadow 0.25s ease",
  cursor: "pointer",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow:
      "0 12px 24px rgba(0,0,0,0.12), 0 6px 12px rgba(0,0,0,0.08)",
  },

  "@media (max-width: 600px)": {
    minWidth: "12px",
    maxWidth: "200px",
    padding: "2px",
    borderRadius: "14px",
  },
});
