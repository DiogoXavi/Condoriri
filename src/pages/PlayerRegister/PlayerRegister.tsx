import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  MenuItem,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Root,
  FormContainer,
  HeaderContainer,
  FieldsGrid,
  ActionsContainer,
  LogoContent,
  IfoContent,
} from "./styles";
import type { IPlayerDB } from "../../types/types";
import {
  createPlayer,
  isDniRegistered,
  uploadPlayerImage,
} from "../../services/players.service";
import { PlayerConfirmDialog, ImageCropDialog } from "./componets";
import { getLogo } from "../../tools/tools";
type PlayerForm = Omit<
  IPlayerDB,
  "id" | "created_at" | "status" | "likes" | "rating"
>;
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const PlayerRegister: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const team = searchParams.get("team") || "";
  const categoryParam = searchParams.get("category") || "";
  const category = categoryParam as IPlayerDB["category"];
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [cropOpen, setCropOpen] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<PlayerForm>({
    name: "",
    full_name: "",
    dni: "",
    image_url: "",
    number: 0,
    position: "",
    phone_number: "",
    nationality: "boliviana",
    birthdate: "",
    team,
    category,
  });
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setError("");
    setSuccess(false);
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setError("Formato de imagen no válido. Usa JPG, PNG o WebP.");
      event.target.value = "";
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setError("La imagen no puede superar los 10 MB.");
      event.target.value = "";
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    setImageToCrop(imageUrl);
    setCropOpen(true);
    event.target.value = "";
  };
  const handleCropConfirm = (croppedFile: File, croppedPreviewUrl: string) => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    setImageFile(croppedFile);
    setImagePreview(croppedPreviewUrl);
    setImageToCrop(null);
    setCropOpen(false);
  };
  const handleCropCancel = () => {
    if (imageToCrop) {
      URL.revokeObjectURL(imageToCrop);
    }
    setImageToCrop(null);
    setCropOpen(false);
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
      if (imageToCrop) {
        URL.revokeObjectURL(imageToCrop);
      }
    };
  }, [imagePreview, imageToCrop]);

const capitalizeWords = (value: string) => {
  return value
    .toLocaleLowerCase("es")
    .replace(/(^|\s)([a-záéíóúüñ])/g, (_, space, char) => {
      return `${space}${char.toLocaleUpperCase("es")}`;
    });
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;

  if (name === "number") {
    const numberValue = value.replace(/\D/g, "").slice(0, 2);

    setForm((prev) => ({
      ...prev,
      number: numberValue ? Number(numberValue) : 0,
    }));

    setError("");
    setSuccess(false);
    return;
  }

  const formattedValue =
    name === "full_name" || name === "name" ? capitalizeWords(value) : value;

  setForm((prev) => ({
    ...prev,
    [name]: formattedValue,
  }));

  setError("");
  setSuccess(false);
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    const dni = form.dni.trim();
    if (!dni) {
      setError("Debes ingresar el DNI del jugador.");
      return;
    }
    if (!form.name.trim()) {
      setError("Debes ingresar el nombre del jugador.");
      return;
    }
    if (!form.full_name.trim()) {
      setError("Debes ingresar el nombre completo del jugador.");
      return;
    }
    if (!form.number || form.number < 1 || form.number > 99) {
      setError("El número de camiseta debe estar entre 1 y 99.");
      return;
    }
    if (!form.position) {
      setError("Debes seleccionar una posición.");
      return;
    }
    if (!form.birthdate) {
      setError("Debes ingresar la fecha de nacimiento.");
      return;
    }
    setConfirmOpen(true);
  };

  const handleConfirmRegister = async () => {
    setLoading(true);
    setError("");
    try {
      const dni = form.dni.trim();
      const dniExists = await isDniRegistered(dni);
      if (dniExists) {
        setConfirmOpen(false);
        setError("Este DNI ya está registrado.");
        return;
      }
      let imageUrl = "";
      if (imageFile) {
        imageUrl = await uploadPlayerImage(imageFile);
      }
      await createPlayer({
        name: form.name.trim(),
        full_name: form.full_name.trim(),
        dni,
        image_url: imageUrl,
        number: form.number,
        position: form.position,
        phone_number: form.phone_number?.trim() || "",
        nationality: form.nationality,
        status: "enabled",
        birthdate: form.birthdate,
        team: form.team,
        category: form.category,
        likes: 0,
        rating: 0,
      });
      setSuccess(true);
      setConfirmOpen(false);
      setForm({
        name: "",
        full_name: "",
        dni: "",
        image_url: "",
        number: 0,
        position: "",
        phone_number: "",
        nationality: "boliviana",
        birthdate: "",
        team,
        category,
      });
      setImageFile(null);
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
      setImagePreview(null);
    } catch (err) {
      console.error("Error registrando jugador:", err);
      setConfirmOpen(false);
      setError("No se pudo registrar el jugador. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };
  if (!team || !categoryParam) {
    return (
      <Root>
        <Alert severity="error">No se encontró el equipo o la categoría.</Alert>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          VOLVER
        </Button>
      </Root>
    );
  }

  return (
    <Root>
      <HeaderContainer>
        <LogoContent>
          <img
            src={getLogo(team)}
            alt={`Logo ${team}`}
            style={{ width: 80, height: 80 }}
          />
        </LogoContent>
        <IfoContent>
          <Typography variant="h4">Registro de jugador</Typography>
          <Typography variant="body1">
            Equipo: <strong>{team}</strong>
          </Typography>
          <Typography variant="body1">
            Categoría: <strong>{category}</strong>
          </Typography>
        </IfoContent>
      </HeaderContainer>
      {success && (
        <Alert severity="success">
          El jugador fue registrado correctamente.
        </Alert>
      )}

      {error && <Alert severity="error">{error}</Alert>}
      <FormContainer component="form" onSubmit={handleSubmit}>
        <FieldsGrid>
          <TextField
            label="Apodo"
            placeholder="Ingrese Apodo o Alias"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Nombre y Apellido"
            placeholder="Ingrese nombre y apellido"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="DNI"
            name="dni"
            value={form.dni}
            onChange={handleChange}
            required
            fullWidth
            slotProps={{
              htmlInput: {
                maxLength: 10,
                inputMode: "numeric",
              },
            }}
          />
          <TextField
            label="Número de camiseta"
            name="number"
            type="number"
            value={form.number || ""}
            onChange={handleChange}
            required
            fullWidth
            slotProps={{
              htmlInput: {
                min: 1,
                max: 99,
                inputMode: "numeric",
              },
            }}
          />
          <TextField
            select
            label="Posición"
            name="position"
            value={form.position}
            onChange={handleChange}
            required
            fullWidth
          >
            <MenuItem value="Arquero">Arquero</MenuItem>
            <MenuItem value="Defensor">Defensor</MenuItem>
            <MenuItem value="Mediocampista">Mediocampista</MenuItem>
            <MenuItem value="Delantero">Delantero</MenuItem>
          </TextField>
          <TextField
            label="Número de WhatsApp"
            name="phone_number"
            type="tel"
            value={form.phone_number || ""}
            onChange={handleChange}
            fullWidth
            placeholder="+591 70000000"
          />
          <TextField
            label="Fecha de nacimiento"
            name="birthdate"
            type="date"
            value={form.birthdate}
            onChange={handleChange}
            required
            fullWidth
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <Box
            sx={{
              gridColumn: "1 / -1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              padding: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Foto del jugador
            </Typography>
            {imagePreview ? (
              <Box
                component="img"
                src={imagePreview}
                alt="Vista previa del jugador"
                sx={{
                  width: 160,
                  height: 160,
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "4px solid",
                  borderColor: "primary.main",
                }}
              />
            ) : (
              <Box
                sx={{
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  border: "3px dashed",
                  borderColor: "divider",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "text.secondary",
                  textAlign: "center",
                  padding: 2,
                }}
              >
                <Typography variant="body2">Sin fotografía</Typography>
              </Box>
            )}
            <Typography variant="caption" color="text.secondary">
              JPG, PNG o WebP · Máximo 10 MB
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button variant="outlined" component="label">
                📁 Seleccionar foto
                <input
                  hidden
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageChange}
                />
              </Button>
              <Button variant="contained" component="label">
                📷 Tomar foto
                <input
                  hidden
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  capture="environment"
                  onChange={handleImageChange}
                />
              </Button>
            </Box>
          </Box>
        </FieldsGrid>
        <ActionsContainer>
          <Button
            type="button"
            variant="outlined"
            disabled={loading}
            onClick={() => navigate(-1)}
          >
            CANCELAR
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            startIcon={
              loading ? (
                <CircularProgress size={18} color="inherit" />
              ) : undefined
            }
          >
            {loading ? "REGISTRANDO..." : "REGISTRARME"}
          </Button>
        </ActionsContainer>
      </FormContainer>
      <ImageCropDialog
        open={cropOpen}
        image={imageToCrop}
        onCancel={handleCropCancel}
        onConfirm={handleCropConfirm}
      />
      <PlayerConfirmDialog
        open={confirmOpen}
        form={form}
        imagePreview={imagePreview}
        loading={loading}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmRegister}
      />
    </Root>
  );
};

export default PlayerRegister;
