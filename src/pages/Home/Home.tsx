import React, { useEffect, useState } from "react";
import portada1 from "../../assets/images/portada/por1.png";
import portada2 from "../../assets/images/portada/por2.png";
import portada3 from "../../assets/images/portada/por3.png";

import ga from "../../assets/images/sponsors/ga.jpeg";
// import beto1 from "../../assets/images/sponsors/beto1.png";
import nr from "../../assets/images/sponsors/nr.png";

import ArticleIcon from "@mui/icons-material/Article";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
//import SchemaIcon from "@mui/icons-material/Schema";

import { Header, Hero, Footer } from "../../components";
//import { useNotifications } from "../../hooks/useNotifications";
import type { BeforeInstallPromptEvent } from "../../types/types";

import {
  Cards,
  CardsContainer,
  TitleContainer,
  TitleText,
  NotificationIconWrapper,
  NotificationDot,
  FooterContainer,
  PageContainer,
  UpdateInfo,
  LiveDot,
  SponsorContainer,
} from "./styles";

import { Button, Box } from "@mui/material";
import { Sponsors } from "../../components";

const portada = [portada1, portada2, portada3];
const sponsorsData = [
  { banner: ga, phoneNumber: 1127305021, url: "", message: "Hola Gerardo soy de la app, me puedes pasar mas informacion por favor?" },
  // { banner: beto1, phoneNumber: 1151762134, url: "", message: "Hola Beto soy de la app, estoy buscando..." },
  { banner: nr, phoneNumber: 1133697922, url: "", message: "Hola Nestor tengo una consulta sobre mi automovil." },
  // { banner: ga, phoneNumber: 1127305021, url: "", message: "Hola Gerado soy de la app, me puedes pasar mas informacion por favor?" }, 
  // { banner: beto1, phoneNumber: 1151762134, url: "", message: "Hola Beto soy de la app, estoy buscando..." },
];

//const LAST_SEEN_KEY = "lastSeenNotificationId";

const Home: React.FC = () => {
  //const { notifications } = useNotifications();

  // const [lastSeenId, setLastSeenId] = useState<number | null>(() => {
  //   const storedId = localStorage.getItem(LAST_SEEN_KEY);
  //   return storedId ? Number(storedId) : null;
  // });
  
  const handleOpenNotifications = (() => {
    console.log("abriendo Notificaciones.");
  });

  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [showInstall, setShowInstall] = useState(() => {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;
    return !isStandalone;
  });

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener,
      );
    };
  }, []);

  // const hasNewNotifications = (() => {
  //   if (!notifications.length) return false;

  //   const latestId = Math.max(...notifications.map((n) => n.id));

  //   return !lastSeenId || latestId > lastSeenId;
  // })();

  // const handleOpenNotifications = () => {
  //   if (notifications.length > 0) {
  //     const latestId = Math.max(...notifications.map((n) => n.id));

  //     setLastSeenId(latestId);
  //     localStorage.setItem(LAST_SEEN_KEY, String(latestId));
  //   }
  // };

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    console.log("Instalando la app...");

    deferredPrompt.prompt();

    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === "accepted") {
      console.log("Usuario instaló la app");
    }else{
      console.log("Usuario rechazó la instalación de la app");
    }

    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const handleClose = () => {
    setShowInstall(false);
  };

  return (
    <PageContainer>
      <Header />

      <Hero images={portada} />

      <div style={{ textAlign: "center" }}>
        <TitleContainer>
          <TitleText>Condoriri 2026</TitleText>
          <UpdateInfo>
            <LiveDot />
            <span>
              Última actualización: <strong>10 agosto 2026 • 22:05 </strong> hs
            </span>
          </UpdateInfo>
          {/* <p>
            Aquí encontrarás toda la información sobre los equipos, jugadores y
            estadísticas del campeonato intercomunal municipio San Lucas.
          </p> */}
        </TitleContainer>

        <CardsContainer>
          <Cards to="/notifications" onClick={handleOpenNotifications}>
            <NotificationIconWrapper>
              <NotificationsIcon fontSize="large" />
              <NotificationDot />
            </NotificationIconWrapper>
            <span>Notificaciones</span>
          </Cards>
          
          <Cards to="/call-up">
            <ArticleIcon fontSize="large" />
            <span>Convocatoria</span>
          </Cards>
          {/* <Cards to="/playoffs">
            <SchemaIcon fontSize="large" />
            <span>Playoffs</span>
          </Cards> */}

          <Cards to="/about">
            <QuestionAnswerIcon fontSize="large" />
            <span>Contactos</span>
          </Cards>
          {/* <Cards to="/live-match">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={0.5}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "red",
                    animation: "pulse 1.5s infinite",
                  }}
                />
                <span
                  style={{ fontWeight: "bold", color: "red", fontSize: 12 }}
                >
                  EN VIVO
                </span>
              </Box>

              <span style={{ fontWeight: 500 }}>Bolivia vs Irak</span>
            </Box>
          </Cards> */}
        </CardsContainer>
        <SponsorContainer>
          <h3
            style={{
              marginBottom: 0,
              color: '#6cb9ff',
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            Sponsors Oficiales:
          </h3>

          <Sponsors data={sponsorsData} />
        </SponsorContainer>

        {showInstall && (
          <Box
            sx={{
              mt: 3,
              p: 2,
              borderRadius: 2,
              background: "#e3f2fd",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: 500,
              margin: "20px auto",
            }}
          >
            <span>Instalá la app para mejor experiencia</span>

            <div>
              <Button
                variant="contained"
                size="small"
                onClick={handleInstallClick}
                startIcon={<AddToHomeScreenIcon />}
              >
                Instalar
              </Button>

              <Button size="small" onClick={handleClose} sx={{ ml: 1 }}>
                ✕
              </Button>
            </div>
          </Box>
        )}
      </div>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </PageContainer>
  );
};

export default Home;
