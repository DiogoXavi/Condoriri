import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Stack,
  InputLabel,
  FormControl,
  Rating,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import toast from "react-hot-toast";
import { categories } from "../../constants/categories";

import { usePlayers } from "../../hooks/usePlayers";
import { useQueryClient } from "@tanstack/react-query";

import {
  uploadPlayerImage,
  createPlayer,
  deletePlayer,
  updatePlayer,
} from "../../services/players.service";

import { teams } from "../../constants/teams/teams";
import type { IPlayerDB } from "../../types/types";

type PlayerFormType = Omit<IPlayerDB, "id" | "created_at">;

const initialState: PlayerFormType = {
  name: "",
  full_name: "",
  dni: "",
  number: 0,
  position: "",
  nationality: "boliviana",
  status: "enabled",
  birthdate: "",
  team: "",
  category: "Damas",
  likes: 0,
  rating: 0,
  image_url: "",
};

const PlayerForm: React.FC = () => {
  const [form, setForm] = useState<PlayerFormType>(initialState);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [editingPlayer, setEditingPlayer] = useState<IPlayerDB | null>(null);

  const [searchId, setSearchId] = useState("");
  const [filterTeam, setFilterTeam] = useState("Quirpini");
  const [filterCategory, setFilterCategory] = useState("Damas");

  // ================= FETCH =================
  const queryClient = useQueryClient();

  const { data: players = [], isLoading } = usePlayers({
    team: filterTeam,
    category: filterCategory,
  });

  // ================= HANDLE CHANGE =================
  const handleChange = (
    field: keyof PlayerFormType,
    value: string | number,
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  // ================= IMAGE =================
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;

    setFile(f);
    setPreview(URL.createObjectURL(f));

    setErrors((prev) => ({ ...prev, image: "" }));
  };

  // ================= EDIT =================
  const handleEdit = (player: IPlayerDB) => {
    setEditingPlayer(player);

    setForm({
      name: player.name,
      full_name: player.full_name,
      dni: player.dni,
      number: player.number,
      position: player.position,
      nationality: player.nationality,
      status: player.status,
      birthdate: player.birthdate,
      team: player.team,
      category: player.category,
      likes: player.likes,
      rating: player.rating,
      image_url: player.image_url,
    });

    setPreview(player.image_url ?? "");
  };

  // ================= RESET =================
  const resetForm = () => {
    setForm(initialState);
    setFile(null);
    setPreview("");
    setErrors({});
    setEditingPlayer(null);
  };

  // ================= VALIDATION =================
  const validate = () => {
    const err: Record<string, string> = {};

    if (!form.name.trim()) err.name = "Nombre requerido";
    if (!form.full_name.trim()) err.full_name = "Nombre completo requerido";
    if (!form.dni.trim()) err.dni = "DNI requerido";

    if (!form.number || form.number <= 0)
      err.number = "Número válido requerido";

    if (!form.position) err.position = "Posición requerida";
    if (!form.birthdate) err.birthdate = "Fecha requerida";
    if (!form.team) err.team = "Equipo requerido";
    if (!form.category) err.category = "Categoría requerida";
    if (!form.nationality) err.nationality = "Nacionalidad requerida";
    if (!form.status) err.status = "Estado requerido";

    if (!file && !editingPlayer) {
      err.image = "Imagen obligatoria";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      let image_url = form.image_url;

      if (file) {
        image_url = await uploadPlayerImage(file);
      }

      if (editingPlayer) {
        await updatePlayer(editingPlayer.id!, {
          ...form,
          image_url,
        });
        toast.success("Jugador actualizado ✏️");
      } else {
        await createPlayer({
          ...form,
          image_url,
        });
        toast.success("Jugador registrado 🚀");
      }

      resetForm();
      queryClient.invalidateQueries({
        queryKey: ["players"],
      });
    } catch (error) {
      console.error(error);
      toast.error("Error al guardar");
    }
  };

  // ================= DELETE =================

  const handleDelete = async (id: number) => {
    toast((t) => (
      <div>
        <p>¿Eliminar jugador? {id}</p>
        <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              await deletePlayer(id);

              queryClient.invalidateQueries({
                queryKey: ["players"],
              });

              toast.success("Eliminado 🗑️");
            }}
          >
            Sí
          </button>

          <button onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ));
  };

  if (isLoading) {
    return <div>Cargando jugadores...</div>;
  }

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {editingPlayer ? "Editar Jugador" : "Registrar Jugador"}
      </Typography>

      {/* ================= FORM ================= */}
      <Stack spacing={2}>
        <TextField
          label="Nombre"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />

        <TextField
          label="Nombre completo"
          value={form.full_name}
          onChange={(e) => handleChange("full_name", e.target.value)}
          error={!!errors.full_name}
          helperText={errors.full_name}
        />

        <TextField
          label="DNI"
          value={form.dni}
          onChange={(e) => handleChange("dni", e.target.value)}
          error={!!errors.dni}
          helperText={errors.dni}
        />

        <TextField
          label="Número"
          type="number"
          value={form.number}
          onChange={(e) => handleChange("number", Number(e.target.value))}
          error={!!errors.number}
          helperText={errors.number}
        />

        {/* POSICIÓN */}
        <FormControl fullWidth error={!!errors.position}>
          <InputLabel>Posición</InputLabel>
          <Select
            value={form.position}
            label="Posición"
            onChange={(e) => handleChange("position", e.target.value)}
          >
            <MenuItem value="Defensor">Defensor</MenuItem>
            <MenuItem value="Delantero">Delantero</MenuItem>
            <MenuItem value="Mediocampista">Mediocampista</MenuItem>
            <MenuItem value="Lateral izquierdo">Lateral izquierdo</MenuItem>
            <MenuItem value="Lateral derecho">Lateral derecho</MenuItem>
            <MenuItem value="Centro delantero">Centro delantero</MenuItem>
            <MenuItem value="Portero">Portero</MenuItem>
            <MenuItem value="Delegado">Delegado</MenuItem>
            <MenuItem value="DT">DT</MenuItem>
          </Select>
          {errors.position && (
            <Typography color="error" variant="caption">
              {errors.position}
            </Typography>
          )}
        </FormControl>

        {/* NACIONALIDAD */}
        <FormControl fullWidth error={!!errors.nationality}>
          <InputLabel>Nacionalidad</InputLabel>
          <Select
            value={form.nationality}
            label="Nacionalidad"
            onChange={(e) => handleChange("nationality", e.target.value)}
          >
            <MenuItem value="boliviana">Boliviana</MenuItem>
            <MenuItem value="argentina">Argentina</MenuItem>
          </Select>
        </FormControl>

        {/* ESTADO */}
        <FormControl fullWidth error={!!errors.status}>
          <InputLabel>Estado</InputLabel>
          <Select
            value={form.status}
            label="Estado"
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <MenuItem value="enabled">Activo</MenuItem>
            <MenuItem value="disabled">Inactivo</MenuItem>
          </Select>
        </FormControl>

        {/* FECHA */}
        <TextField
          label="Fecha de nacimiento"
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          value={form.birthdate}
          onChange={(e) => handleChange("birthdate", e.target.value)}
          error={!!errors.birthdate}
          helperText={errors.birthdate}
        />

        {/* EQUIPO */}
        <FormControl fullWidth error={!!errors.team}>
          <InputLabel>Equipo</InputLabel>
          <Select
            value={form.team}
            label="Equipo"
            onChange={(e) => handleChange("team", e.target.value)}
          >
            {teams.map((t) => (
              <MenuItem key={t.id} value={t.name}>
                {t.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* CATEGORY */}
        <FormControl fullWidth error={!!errors.category}>
          <InputLabel>Categoría</InputLabel>

          <Select
            value={form.category}
            label="Categoría"
            onChange={(e) => handleChange("category", e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>

          {errors.category && (
            <Typography color="error" variant="caption">
              {errors.category}
            </Typography>
          )}
        </FormControl>

        {/* RATING */}
        <Box>
          <Typography>Rating</Typography>
          <Rating
            value={form.rating}
            max={10}
            onChange={(_, v) => handleChange("rating", v || 0)}
          />
        </Box>

        {/* IMAGE */}
        <Button variant="outlined" component="label">
          Subir Imagen
          <input hidden type="file" onChange={handleFileChange} />
        </Button>

        {errors.image && <Typography color="error">{errors.image}</Typography>}

        {preview && <img src={preview} style={{ width: 120 }} />}

        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleSubmit}>
            {editingPlayer ? "Actualizar" : "Guardar"}
          </Button>

          <Button color="error" onClick={resetForm}>
            Limpiar
          </Button>
        </Stack>
      </Stack>

      {/* ================= FILTROS ================= */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6">Buscar jugadores</Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <TextField
            label="Buscar por ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          {/* FILTRO EQUIPO */}
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel>Equipo</InputLabel>
            <Select
              value={filterTeam}
              label="Equipo"
              onChange={(e) => setFilterTeam(e.target.value)}
            >
              <MenuItem value="">Todos</MenuItem>
              {teams.map((t) => (
                <MenuItem key={t.id} value={t.name}>
                  {t.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* 🆕 FILTRO CATEGORÍA */}
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel>Categoría</InputLabel>
            <Select
              value={filterCategory}
              label="Categoría"
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <MenuItem value="">Todas</MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Box>

      {/* ================= LISTA ================= */}
      <Box sx={{ mt: 3 }}>
        {players.map((player) => (
          <Card key={player.id} sx={{ mb: 2 }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography>
                  {player.id}- {player.full_name}
                </Typography>
                <Typography variant="body2">
                  {player.team} - {player.category}
                </Typography>
              </Box>

              <Box>
                <IconButton color="primary" onClick={() => handleEdit(player)}>
                  <EditIcon />
                </IconButton>

                <IconButton
                  color="error"
                  onClick={() => handleDelete(player.id!)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PlayerForm;
