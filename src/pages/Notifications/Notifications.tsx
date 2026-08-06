import React from "react";
import { Container } from "./styles";
import { Notifications as News, Title } from "../../components";

const Notifications: React.FC = () => {
  return (
    <Container>
      <Title title="Notificaciones"/>
      <News />
    </Container>
  );
};

export default Notifications;
