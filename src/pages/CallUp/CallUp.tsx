import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import convocatoria from "../../assets/documents/convocatoria.pdf";
import Title from "../../components/Title";

import { Box, Button, Stack } from "@mui/material";

import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CallUp: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        margin: "auto",
        textAlign: "center",
        p: 2,
      }}
    >
      <Title title="Convocatoria 2026" />

      <Stack
        direction="row"
        spacing={2}
        sx={{
          mb: 2,
          mt: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          startIcon={<ZoomOutIcon />}
          onClick={() => setScale((s) => Math.max(0.6, s - 0.2))}
        >
          Zoom -
        </Button>

        <Button
          startIcon={<ZoomInIcon />}
          onClick={() => setScale((s) => Math.min(2.2, s + 0.2))}
        >
          Zoom +
        </Button>

        <Button
          variant="contained"
          startIcon={<FileDownloadIcon />}
          href={convocatoria}
          download="Convocatoria_San_Lucas_2026.pdf"
        >
          Descargar
        </Button>
      </Stack>

      <Box
        sx={{
          border: "1px solid #ddd",
          borderRadius: 2,
          background: "#fafafa",
          p: 2,
          height: "80vh",
          overflowY: "auto",
        }}
      >
        <Document
          file={convocatoria}
          onLoadSuccess={onLoadSuccess}
          loading="Cargando PDF..."
          error="Error al cargar el PDF"
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Page
                pageNumber={index + 1}
                scale={scale}
                width={window.innerWidth < 768 ? 320 : 700}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Box>
          ))}
        </Document>
      </Box>
    </Box>
  );
};

export default CallUp;
