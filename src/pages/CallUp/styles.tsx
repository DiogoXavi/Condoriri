import { styled } from "@mui/material/styles";

export const Container = styled("section")(({ theme }) => ({
  padding: "2rem",
  maxWidth: "800px",
  margin: "auto",
  fontFamily: "Arial, sans-serif",
  color: "#222",
  lineHeight: 1.6,
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",

  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
    fontSize: "0.9rem",
  },
}));

export const Title = styled("h1")({
  fontSize: "2rem",
  marginBottom: "0.5rem",
});

export const Subtitle = styled("h2")({
  fontSize: "1rem",
  margin: "1rem 0 0.5rem",
});

export const Paragraph = styled("p")({
  margin: "0.75rem 0",
});

export const List = styled("ul")({
  listStyle: "none",
  paddingLeft: "0.6rem",
  margin: "0.5rem 0 1rem",
});

export const ListItem = styled("li")({
  margin: "0.25rem 0",

  "&::before": {
    content: '"– "',
    color: "#555",
  },
});

export const ContactInfo = styled("div")({
  marginTop: "1rem",
  fontWeight: "bold",
});

export const Highlight = styled("span")({
  color: "#246f5be9",
  fontWeight: "bold",
});

export const ButtonsContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
});

export const CallContainer = styled("div")(() => ({
  marginTop: "1.5rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const PdfWrapper = styled("div")(() => ({
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  maxWidth: "750px",
  width: "100%",
  display: "flex",
  justifyContent: "center",

  "& canvas": {
    width: "100% !important",
    height: "auto !important",
  },
}));

export const PdfControls = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginTop: "1rem",
});



