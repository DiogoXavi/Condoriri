import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { getLogo } from "../../tools/tools";
import logo from "../../assets/images/icons/logo1.png";
import watermarker from "../../assets/images/logos/logo1.png";
import signature from "../../assets/images/logos/signature.png";
import flag from "../../assets/images/logos/flag.png";
import { useTeamsWithPlayers } from "../../hooks/useTeamsWithPlayers";
import { categories } from "../../constants/categories";
import { Select, MenuItem } from "@mui/material";
import * as htmlToImage from "html-to-image";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import type { IPlayer } from "../../types/types";

import {
  GridContainer,
  Card,
  CardContent,
  TeamLogo,
  TeamName,
  PlayerPhoto,
  PlayerName,
  PlayerPosition,
  DNI,
  QRWrapper,
  DownloadButton,
  HederCredential,
  ChampionshipLogo,
  PlayerFullName,
  PlayerNumber,
  PhotoWrapper,
  CardTitle,
  PlayerInfo,
  BodyCredential,
  Watermark,
} from "./styles";

const Credenciales: React.FC = () => {
  const { teams: equipos, loading } = useTeamsWithPlayers();
  const [selectedTeam, setSelectedTeam] = useState<string>("Quirpini");
  const [selectedCategory, setSelectedCategory] = useState<string>("Damas");

  // 📸 descargar una sola credencial
  const downloadCredencial = (id: string) => {
    const node = document.getElementById(id);
    if (node) {
      htmlToImage.toPng(node).then((dataUrl: string) => {
        const link = document.createElement("a");
        link.download = `${id}.png`;
        link.href = dataUrl;
        link.click();
      });
    }
  };

  // 📄 PDF por lotes (100 en 100)
  const downloadPDF = async () => {
    const allCards = Array.from(
      document.querySelectorAll("[id^='credencial-img-']"),
    );

    const BATCH_SIZE = 99;

    const cardsPerRow = 3;
    const cardsPerColumn = 3;
    const cardsPerPage = cardsPerRow * cardsPerColumn;

    const cardWidth = 56;
    const cardHeight = 94;

    const pageWidth = 210;
    const marginX = (pageWidth - cardsPerRow * cardWidth) / 2;
    const marginY = 10;

    for (let start = 0; start < allCards.length; start += BATCH_SIZE) {
      const batch = allCards.slice(start, start + BATCH_SIZE);

      const pdf = new jsPDF("p", "mm", "a4");

      for (let i = 0; i < batch.length; i++) {
        const element = batch[i] as HTMLElement;

        const canvas = await html2canvas(element, {
          scale: 3,
          useCORS: true,
          allowTaint: true,
        });

        const imgData = canvas.toDataURL("image/png");

        const indexOnPage = i % cardsPerPage;
        const col = indexOnPage % cardsPerRow;
        const row = Math.floor(indexOnPage / cardsPerRow);

        const x = marginX + col * cardWidth;
        const y = marginY + row * cardHeight;

        pdf.addImage(imgData, "PNG", x, y, cardWidth, cardHeight);

        if ((i + 1) % cardsPerPage === 0 && i !== batch.length - 1) {
          pdf.addPage();
        }

        canvas.width = 0;
        canvas.height = 0;
      }

      pdf.save(`credenciales_${start}-${start + batch.length}.pdf`);
    }
  };

  const getRole = (position: string) => {
    if (position === "Delegado") return "delegado";
    if (position === "DT") return "dt";
    return undefined;
  };

  const getLabel = (player: IPlayer) => {
    if (player.position === "Delegado") return "DL";
    if (player.position === "DT") return "DT";
    return player.number;
  };

  if (loading) return <div>Cargando credenciales...</div>;

  return (
    <>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          size="small"
          style={{ marginRight: "10px", minWidth: "200px" }}
        >
          <MenuItem value="all">Todas las categorías</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          size="small"
          style={{ marginRight: "10px", minWidth: "200px" }}
        >
          <MenuItem value="all">Todos los equipos</MenuItem>

          {equipos.map((team) => (
            <MenuItem key={team.id} value={team.name}>
              {team.name}
            </MenuItem>
          ))}
        </Select>

        <DownloadButton onClick={downloadPDF}>Descargar PDF</DownloadButton>
      </div>

      <GridContainer>
  {equipos
    .filter((team) =>
      selectedTeam === "all" ? true : team.name === selectedTeam
    )
    .map((team) =>
      team.teams
        .filter((subTeam) =>
          selectedCategory === "all"
            ? true
            : subTeam.category === selectedCategory
        )
        .map((subTeam) =>
          subTeam.players.map((player) => {
            const exportId = `credencial-img-${team.id}-${subTeam.id}-${player.id}`;

            const playerUrl = `https://condoriri.vercel.app/player-detail?idPlayer=${player.id}&idTeam=${team.id}&category=${subTeam.category}`;

            return (
              <div key={exportId} style={{ textAlign: "center" }}>
                <Card id={exportId}>
                  <CardContent>
                    <HederCredential>
                      <ChampionshipLogo src={logo} />
                      <CardTitle>DISTRITO-7 2026</CardTitle>
                    </HederCredential>

                    <BodyCredential>
                      <Watermark src={watermarker} />

                      <TeamName>
                        {team.name} - {subTeam.category}
                          </TeamName>

                          <PhotoWrapper bg={flag}>
                            <PlayerPhoto src={player.image} />
                            <DNI>{player.DNI?.toString().slice(-5)}</DNI>
                          </PhotoWrapper>

                          <PlayerInfo>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100%",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  gap: "8px",
                                  alignItems: "center",
                                }}
                              >
                                <PlayerName>{player.name}</PlayerName>
                                <PlayerNumber role={getRole(player.position)}>
                                  {getLabel(player)}
                                </PlayerNumber>
                              </div>

                              <PlayerFullName>{player.fullName}</PlayerFullName>

                              <PlayerPosition>{player.position}</PlayerPosition>
                            </div>
                            <QRCodeCanvas value={playerUrl} size={80} />
                          </PlayerInfo>

                          <QRWrapper>
                            <TeamLogo src={getLogo(team.name)} />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <img src={signature} style={{ width: "80px" }} />

                              <p style={{ fontSize: "10px", margin: 0 }}>
                                <strong>ORGANIZADOR</strong>
                                <br />
                                Iver Carmona
                              </p>
                            </div>
                          </QRWrapper>
                        </BodyCredential>
                      </CardContent>
                    </Card>

                    <DownloadButton
                      onClick={() => downloadCredencial(exportId)}
                    >
                      Descargar
                    </DownloadButton>
                  </div>
                );
              }),
            ),
        )}
      </GridContainer>
    </>
  );
};

export default Credenciales;
