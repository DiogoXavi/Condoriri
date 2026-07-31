import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

export const HeroContainer = styled("div")({
  width: "100%",
  maxWidth: "900px",
  margin: "1rem auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const CarouselWrapper = styled("div")({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  touchAction: "pan-y",
});

export const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  display: "block",
  objectFit: "contain",
  backgroundColor: "#fff",
  height: 151,

  [theme.breakpoints.up("sm")]: {
    height: 240,
  },

  [theme.breakpoints.up("md")]: {
    height: 320,
  },

  [theme.breakpoints.up("lg")]: {
    height: 380,
  },
}));

export const ArrowButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "left",
})<{ left?: boolean }>(({ left }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  [left ? "left" : "right"]: 10,
  backgroundColor: "rgba(0,0,0,0.3)",
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}));

export const DotsContainer = styled("div")({
  position: "absolute",
  bottom: 10,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: 8,
});

export const Dot = styled("div")<{ active: boolean }>(({ active }) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: active ? "#000" : "#bbb",
  cursor: "pointer",
}));

export const SlidesContainer = styled("div")({
  display: "flex",
  width: "100%",
  willChange: "transform",
  transition: "transform 0.5s ease-in-out",
});

export const Slide = styled("div")({
  flex: "0 0 100%",
  width: "100%",
  minWidth: "100%",
});
