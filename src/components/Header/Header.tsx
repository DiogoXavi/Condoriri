import React from "react";
import logo from "../../assets/images/icons/logo1.png";
import { Tooltip, Button, useMediaQuery } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import {
  Container,
  Logo,
  ButtonContainer,
  LogoContainer,
  HomeButton,
  NavButtonStyle,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleNavigate = (description: string) => {
    switch (description) {
      case "fixture":
        navigate(`/fixture?query=${description}`);
        break;
      case "table":
        navigate(`/table?query=${description}`);
        break;
      case "teams":
        navigate(`/team-categories?query=${description}`);
        break;
      case "scorers":
        navigate(`/top-scorers-table?query=${description}`);
        break;
      default:
        console.warn("Ruta no encontrada:", description);
        break;
    }
  };

  const onShare = () => {
    if (!navigator.share) {
      alert("La función de compartir no está disponible en este navegador.");
      return;
    }

    const shareData = {
      title: "Campeonato Distrito 7 San Lucas 2026",
      text: "¡Mira el Campeonato Distrito 7 San Lucas 2026! Toda la información sobre equipos, jugadores y estadísticas.",
      url: window.location.href,
    };

    navigator
      .share(shareData)
      .catch((error) => console.error("Error sharing:", error));
  };

  const isHomePage = location.pathname === "/";

  return (
    <Container>
      <LogoContainer onClick={() => navigate("/")}>
        <Logo src={logo} alt="Logo" />
        <Tooltip title="Compartir">
          <HomeButton
            color="secondary"
            onClick={() => (isHomePage ? onShare() : navigate("/"))}
          >
            {isHomePage ? <ShareIcon /> : <HomeIcon />}
          </HomeButton>
        </Tooltip>
      </LogoContainer>
      <ButtonContainer>
        <Button
          onClick={() => handleNavigate("fixture")}
          color="secondary"
          sx={NavButtonStyle()}
        >
          FIXTURE
        </Button>
        <Button
          onClick={() => handleNavigate("table")}
          color="secondary"
          sx={NavButtonStyle()}
        >
          {isMobile ? "TABLA" : "TABLA DE POSICIONES"}
        </Button>
        {/* <Button
          onClick={() => handleNavigate("scorers")}
          color="secondary"
          sx={NavButtonStyle()}
        >
          {isMobile ? "GOLEADORES" : "TABLA DE GOLEADORES"}
        </Button> */}
        <Button
          onClick={() => handleNavigate("teams")}
          color="secondary"
          sx={NavButtonStyle()}
        >
          EQUIPOS
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
