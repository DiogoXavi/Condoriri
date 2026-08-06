import React, { useState } from "react";
import {
  Container,
  Form,
  StyledField,
} from "./styles";
import { Button, MenuItem } from "@mui/material";
import { createNotification } from "../../services/notifications.service";
import toast from "react-hot-toast";
import { Title } from "../../components";

type NotificationStatus = "success" | "info" | "warning" | "error";

const NotificationsAdmin: React.FC = () => {
  const [form, setForm] = useState<{
    title: string;
    description: string;
    status: NotificationStatus;
  }>({
    title: "",
    description: "",
    status: "info",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    if (field === "status") {
      setForm((prev) => ({ ...prev, [field]: value as NotificationStatus }));
    } else {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.title || !form.description) {
    toast.error("Completa todos los campos");
    return;
  }

  try {
    setLoading(true);

    await createNotification(form);

    toast.success("Notificación creada");

    setForm({
      title: "",
      description: "",
      status: "info",
    });
  } catch {
    toast.error("Error al crear notificación");
  } finally {
    setLoading(false);
  }
};

  return (
    <Container>
      <Title title="Administrador de Notificaciones"/>

      <Form onSubmit={handleSubmit}>
        <StyledField
          label="Título"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          fullWidth
        />

        <StyledField
          label="Descripción"
          multiline
          rows={4}
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
          fullWidth
        />

        <StyledField
          select
          label="Estado"
          value={form.status}
          onChange={(e) => handleChange("status", e.target.value)}
        >
          <MenuItem value="success">Success</MenuItem>
          <MenuItem value="info">Info</MenuItem>
          <MenuItem value="warning">Warning</MenuItem>
          <MenuItem value="error">Error</MenuItem>
        </StyledField>

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
        >
          {loading ? "Guardando..." : "Crear Notificación"}
        </Button>
      </Form>
    </Container>
  );
};

export default NotificationsAdmin;