import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slider,
  Typography,
} from "@mui/material";
import Cropper, { type Area, type Point } from "react-easy-crop";

interface ImageCropDialogProps {
  open: boolean;
  image: string | null;
  onCancel: () => void;
  onConfirm: (file: File, previewUrl: string) => void;
}

const ImageCropDialog: React.FC<ImageCropDialogProps> = ({
  open,
  image,
  onCancel,
  onConfirm,
}) => {
  const [crop, setCrop] = useState<Point>({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] = useState(1);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [],
  );

  const createCroppedImage = async () => {
    if (!image || !croppedAreaPixels) {
      return;
    }

    try {
      const croppedFile = await getCroppedImg(image, croppedAreaPixels);

      const previewUrl = URL.createObjectURL(croppedFile);

      onConfirm(croppedFile, previewUrl);
    } catch (error) {
      console.error("Error recortando imagen:", error);
    }
  };

  const handleClose = () => {
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);

    onCancel();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Ajustar foto del jugador</DialogTitle>

      <DialogContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Mueve la imagen y utiliza el zoom para seleccionar la parte que
          quieres mostrar.
        </Typography>

        {/* ÁREA DE RECORTE */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xs: 300,
              sm: 400,
            },
            backgroundColor: "#111",
            overflow: "hidden",
          }}
        >
          {image && (
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="rect"
              showGrid={true}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          )}
        </Box>

        {/* ZOOM */}
        <Box sx={{ mt: 3, px: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }} gutterBottom>
            Zoom
          </Typography>

          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(_, value) => setZoom(value as number)}
            valueLabelDisplay="auto"
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button variant="outlined" onClick={handleClose}>
          CANCELAR
        </Button>

        <Button
          variant="contained"
          onClick={createCroppedImage}
          disabled={!croppedAreaPixels}
        >
          USAR ESTA FOTO
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageCropDialog;


const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: Area,
): Promise<File> => {
  const image = await createImage(imageSrc);

  const canvas = document.createElement("canvas");

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No se pudo crear el contexto del canvas.");
  }

 
  const size = 600;

  canvas.width = size;
  canvas.height = size;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    size,
    size,
  );

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob((result) => resolve(result), "image/jpeg", 0.9);
  });

  if (!blob) {
    throw new Error("No se pudo generar la imagen recortada.");
  }

  return new File([blob], `player-${Date.now()}.jpg`, {
    type: "image/jpeg",
  });
};


const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();

    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });
