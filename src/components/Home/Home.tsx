import logo from "../../assets/images/logos/logo2.png";
import callUp from "../../assets/documents/convocatoria.pdf";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { FaWhatsapp, FaChromecast } from "react-icons/fa";

import {
  Container,
  Logo,
  Title,
  Subtitle,
  Description,
  SectionTitle,
  Contact,
  Footer,
  ContactName,
} from "./styles";

const message =
  "Hola me podria pasar mas informacion sobre el campeonato de futbol de distrito 7 San Lucas 2026, gracias.";

const contacts = [
  { name: "Iver Carmono", phone: "5491160341175" },
];

function Home() {
  return (
    <Container>
      <Logo src={logo} alt="Logo campeonato" />

      <Title>Campeonato de Fútbol Intercomunal</Title>
      <Subtitle>Distrito 7 San Lucas - 2026</Subtitle>

      <Description>
        Aquí encontrarás toda la información sobre los equipos, jugadores y
        estadísticas del campeonato Distrito 7 de municipio San Lucas Chuquisaca Bolivia.
      </Description>

      <SectionTitle>Contactos e inscripciones</SectionTitle>

      {contacts.map((contact) => (
        <Contact
          key={contact.phone}
          href={`https://wa.me/${contact.phone}?text=${encodeURIComponent(
            message,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactName>
            {contact.name}: {""}
          </ContactName>
          <FaWhatsapp />
          {contact.phone}
        </Contact>
      ))}

      <SectionTitle>Convocatoria</SectionTitle>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          mb: 3,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          startIcon={<FaChromecast />}
          href="/call-up"
        >
          Mostrar
        </Button>

        <Button
          variant="contained"
          startIcon={<FileDownloadIcon />}
          href={callUp}
          download="Convocatoria 2026.pdf"
        >
          Descargar
        </Button>
      </Stack>

      <SectionTitle>Organiza</SectionTitle>

      <Description>
        Condoriri
      </Description>

      <Footer>
        Xavi Innovation Technology © 2026. All rights reserved. Contact us at:
        591 74439889
      </Footer>
    </Container>
  );
}

export default Home;
