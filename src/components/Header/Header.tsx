import React from "react";
import logo from "../../assets/images/icons/logo1.png";
import { Tooltip, useMediaQuery } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/auth.context";

import {
  Container,
  Logo,
  ButtonContainer,
  LogoContainer,
  HomeButton,
  NavButton,
} from "./styles";

import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useMediaQuery("(max-width:600px)");
  const { user } = useAuth();

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
  const handleAuth = async () => {
    if (user) {
      await supabase.auth.signOut();
      return;
    }
    navigate("/login");
  };

  const onShare = () => {
    if (!navigator.share) {
      alert("La función de compartir no está disponible en este navegador.");
      return;
    }

    const shareData = {
      title: "Futbol Ditroto-6 2026",
      text: "¡Mira el Campeonato de Futbol Ditroto-6 2026! Toda la información sobre equipos, jugadores y estadísticas.",
      url: window.location.href,
    };

    navigator
      .share(shareData)
      .catch((error) => console.error("Error sharing:", error));
  };

  const isHomePage = location.pathname === "/";

  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} onClick={() => navigate("/")} alt="Futbol Ditroto-6" />

        <Tooltip title={isHomePage ? "Compartir" : "Inicio"}>
          <HomeButton
            onClick={(event) => {
              event.stopPropagation();
              if (isHomePage) {
                onShare();
              } else {
                navigate("/");
              }
            }}
          >
            {isHomePage ? <ShareIcon /> : <HomeIcon />}
          </HomeButton>
        </Tooltip>
        <Tooltip title={user ? `Sesión: ${user.email}` : "Iniciar sesión"}>
          <HomeButton color="secondary" onClick={handleAuth}>
            {user ? <LogoutIcon /> : <LoginIcon />}
          </HomeButton>
        </Tooltip>
      </LogoContainer>

      {/* NAVEGACIÓN */}
      <ButtonContainer>
        <NavButton
          active={location.pathname === "/fixture"}
          onClick={() => handleNavigate("fixture")}
        >
          FIXTURE
        </NavButton>

        <NavButton
          active={location.pathname === "/table"}
          onClick={() => handleNavigate("table")}
        >
          {isMobile ? "TABLA" : "TABLA DE POSICIONES"}
        </NavButton>

        <NavButton
          active={location.pathname === "/top-scorers-table"}
          onClick={() => handleNavigate("scorers")}
        >
          {isMobile ? "GOLEADORES" : "TABLA DE GOLEADORES"}
        </NavButton>

        <NavButton
          active={location.pathname === "/team-categories"}
          onClick={() => handleNavigate("teams")}
        >
          EQUIPOS
        </NavButton>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
