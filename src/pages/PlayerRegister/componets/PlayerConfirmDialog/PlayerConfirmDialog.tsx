import React from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";

import type { IPlayerDB } from "../../../../types/types";

type PlayerForm = Omit<
  IPlayerDB,
  "id" | "created_at" | "status" | "likes" | "rating"
>;

interface PlayerConfirmDialogProps {
  open: boolean;
  form: PlayerForm;
  imagePreview: string | null;
  loading: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const PlayerConfirmDialog: React.FC<PlayerConfirmDialogProps> = ({
  open,
  form,
  imagePreview,
  loading,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        if (!loading) {
          onClose();
        }
      }}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Confirmar registro</DialogTitle>
      <DialogContent>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Por favor verifica cuidadosamente sus datos personales antes de registrarse. Una vez confirmado, no podrás modificar sus datos ingresados.
        </Typography>

        {/* FOTO */}
        {imagePreview && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Box
              component="img"
              src={imagePreview}
              alt="Foto del jugador"
              sx={{
                width: 140,
                height: 140,
                objectFit: "cover",
                borderRadius: "20%",
                border: "4px solid",
                borderColor: "primary.main",
              }}
            />
          </Box>
        )}

        {/* DATOS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <DataRow label="Apodo / Alias" value={form.name} />
          <Divider />
          <DataRow label="Nombre completo" value={form.full_name} />
          <Divider />
          <DataRow label="DNI" value={form.dni} />
          <Divider />
          <DataRow label="Número de camiseta" value={`#${form.number}`} />
          <Divider />
          <DataRow label="Posición" value={form.position} />
          <Divider />
          <DataRow
            label="WhatsApp"
            value={form.phone_number || "No registrado"}
          />
          <Divider />
          <DataRow label="Fecha de nacimiento" value={form.birthdate} />
          <Divider />
          <DataRow label="Equipo" value={form.team} />
          <Divider />
          <DataRow label="Categoría" value={form.category} />
        </Box>

        <Alert severity="warning" sx={{ mt: 3 }}>
          Verifica que todos los datos sean correctos. Una vez confirmado, el
          jugador será registrado.
        </Alert>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} disabled={loading} variant="outlined">
          VOLVER A EDITAR
        </Button>
        <Button
          onClick={onConfirm}
          disabled={loading}
          variant="contained"
          startIcon={
            loading ? <CircularProgress size={18} color="inherit" /> : undefined
          }
        >
          {loading ? "REGISTRANDO..." : "CONFIRMAR Y REGISTRAR"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface DataRowProps {
  label: string;
  value: string | number;
}

const DataRow: React.FC<DataRowProps> = ({ label, value }) => {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {value}
      </Typography>
    </Box>
  );
};

export default PlayerConfirmDialog;
