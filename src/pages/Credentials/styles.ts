import { styled } from "@mui/material/styles";

export const GridContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
  gap: "10px",
  padding: "20px",
}));

export const Card = styled("div")(({ theme }) => ({
  borderRadius: "15px",
  overflow: "hidden",
  width: "270px",
  background: "linear-gradient(135deg, #f5fafaff 0%, #1cafee 100%)",
  textAlign: "center",
  boxShadow: theme.shadows[6],
  fontFamily: "'Oswald', sans-serif",
  position: "relative",
}));

export const CardContent = styled("div")(() => ({
  padding: "5px",
}));

export const TeamLogo = styled("img")(() => ({
  width: "120px",
  height: "120px",           // 👈 tamaño fijo
  objectFit: "contain",     // 👈 mantiene proporción sin deformar
  marginBottom: "5px",
  borderRadius: "10%",
}));

export const TeamName = styled("h3")(() => ({
  margin: 0,
  fontSize: "16px",
  textTransform: "uppercase",
  letterSpacing: "1px",
}));

export const PlayerPhoto = styled("img")(() => ({
  width: "150px",
  height: "150px",
  borderRadius: "10%",
  objectFit: "cover",
  border: "2.5px solid #fff",
}));

export const PlayerName = styled("h2")(() => ({
  fontWeight: "bold",
  fontSize: "15px",
  margin: "2px 0",
  textTransform: "uppercase",
}));

export const CardTitle = styled("h2")(() => ({
  fontWeight: "bold",
  fontSize: "12px",
  margin: "0",
  textTransform: "uppercase",
}));

export const PlayerFullName = styled("h2")(() => ({
  fontWeight: "bold",
  fontFamily: "'Roboto', sans-serif",
  fontStyle: "italic",
  fontSize: "14px",
  margin: "0",
  height: "37px",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));

export const PlayerNumber = styled("h1")<{
  role?: "delegado" | "dt";
}>(({ role }) => ({
  fontSize: "20px",
  background: "rgb(244, 238, 210)",
  color:
    role === "delegado"
      ? "red"
      : role === "dt"
      ? "green"
      : "#000",
  display: "inline-block",
  padding: "0 8px",
  borderRadius: "6px",
  fontWeight: "bold",
  margin: "2px 0",
}));

export const PlayerPosition = styled("p")(() => ({
  margin: "0",
  fontSize: "14px",
  fontStyle: "italic",
}));

export const DNI = styled("p")(() => ({
  position: "absolute",
  bottom: "2px",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "14px",
  fontWeight: "bold",
  background: "rgba(255, 255, 0, 0.8)",
  padding: "0 6px",
  borderRadius: "4px",
  textShadow: "0px 0px 4px yellow",
}));

export const QRWrapper = styled("div")(() => ({
  display: "flex",
  //margin: "10px 0",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const DownloadButton = styled("button")(() => ({
  marginTop: "8px",
  padding: "6px 12px",
  fontSize: "12px",
  backgroundColor: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#115293",
  },
}));
export const HederCredential = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px",
  borderBottom: "1px solid #0d0c0cff",
  "& div": {
    textAlign: "center",
  },
}));

export const ChampionshipLogo = styled("img")(() => ({
  width: "120px",
}));

export const PhotoWrapper = styled("div")<{ bg: string }>(({ bg }) => ({
  position: "relative",
  display: "inline-block",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  width:"100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "lighten",
}));

export const PlayerInfo = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-around",
}));

export const BodyCredential = styled("div")({
  position: "relative",
  paddingBottom: "10px",
  overflow: "hidden",
});

export const Watermark = styled("img")({
  position: "absolute",
  top: "35%",
  left: "47%",
  transform: "translate(-15%, 5%)",
  width: "100%",
  height: "100%",
  objectFit: "contain",
  opacity: 0.25,
  pointerEvents: "none",
});
