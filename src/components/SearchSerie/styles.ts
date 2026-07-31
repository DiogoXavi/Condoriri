import { styled } from "@mui/material/styles";

export const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  width: "100%",
  margin: "0 auto",
  flexWrap: "wrap",
  maxWidth: '1250px',

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
    padding: "5px",
    gap: "20px",
    justifyContent: "center",
  },
}));


export const SerieLabel = styled("span")<{
  serie?: string;
  selected?: boolean;
}>(({ serie, selected }) => {
  let color = "#1abc9c";

  if (serie === "A") color = "#eaae17";
  if (serie === "B") color = "#bb085c";
  if (serie === "C") color = "#158e17";

  return {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "999px",
    border: `1.5px solid ${color}`,
    color: selected ? "#fff" : color,
    fontSize: "0.85rem",
    fontWeight: 600,
    cursor: "pointer",
    userSelect: "none",

    backgroundColor: selected ? color : "transparent",

    boxShadow: selected
      ? `0 2px 6px ${color}66`
      : "0 1px 3px rgba(0,0,0,0.1)",

    transition: "all 0.25s ease",

    "&:hover": {
      backgroundColor: selected ? color : `${color}22`,
      transform: "scale(1.05)",
    },

    "@media (max-width: 600px)": {
      fontSize: "0.65rem",
      padding: "4px 10px",
    },
  };
});

export const LabelContainer = styled("p")(() => ({
  display: "flex",
  margin: 0,
  padding: 0,
  color: "#1abc9c",
  gap: "2rem",
  fontSize: "1rem",
  justifyContent: "center",
  "@media (max-width: 600px)": {
    fontSize: "1rem",
    gap: "1.5rem",
  },
}));