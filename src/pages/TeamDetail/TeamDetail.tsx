import React, { useEffect, useMemo } from "react";
import { HeaderTeam, PlayerCard } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { getLogo } from "../../tools/tools";
import { Button, Typography, Box, Skeleton } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";

import {
  ButtonContainer,
  MessageContent,
  CardContainer,
  PlayerCardWrapper,
} from "./styles";

import { usePlayers } from "../../hooks/usePlayers";
import { teams } from "../../constants/teams/teams";
import type { CategoryType, IPlayerDB } from "../../types/types";

const DetailTeam: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const idTeamParam = queryParams.get("id");
  const categoryParam = queryParams.get("category");

  const idTeam =
    idTeamParam && !isNaN(Number(idTeamParam)) ? Number(idTeamParam) : null;

  const team = teams.find((t) => t.id === idTeam);

  const { data: players = [], isLoading } = usePlayers({
    team: team?.name,
    category: categoryParam || undefined,
  });

  const categories = useMemo((): CategoryType[] => {
    if (!team) return [];

    return team.teams.map((t) => t.category as CategoryType);
  }, [team]);

  const selectedCategory = useMemo((): CategoryType => {
    if (!categories.length) return "Juvenil"; // Default fallback

    if (categoryParam && categories.includes(categoryParam as CategoryType)) {
      return categoryParam as CategoryType;
    }

    return categories[0] as CategoryType;
  }, [categories, categoryParam]);

  const selectedPlayers: IPlayerDB[] = players.filter(
    (p) => p.category === selectedCategory,
  );

  const canGoBack = location.key !== "default";

  const handleBack = () => {
    if (canGoBack) navigate(-1);
    else navigate("/");
  };

  const handleCategoryChange = (cat: CategoryType) => {
    navigate(`/team-detail?id=${idTeam}&category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

  const onShare = () => {
    if (!team) return;

    const shareUrl = `${window.location.origin}/team-detail?id=${idTeam}&category=${encodeURIComponent(
      selectedCategory,
    )}`;

    const shareData = {
      title: `Comunidad: ${team.name}`,
      text: `Información del equipo ${team.name} - Categoría: ${selectedCategory}`,
      url: shareUrl,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("URL copiada al portapapeles!");
    }
  };

  useEffect(() => {
    if (team) {
      document.title = selectedCategory
        ? `${team.name} - ${selectedCategory}`
        : team.name;
    } else {
      document.title = "Detalle de equipo";
    }
  }, [team, selectedCategory]);

  if (isLoading) {
    return (
      <PlayerCardWrapper>
        {[...Array(6)].map((_, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              mb: 2,
              p: 2,
              borderRadius: "16px",
              boxShadow: 1,
            }}
          >
            <Skeleton variant="circular" width={60} height={60} />
            <Box sx={{ width: "100%" }}>
              <Skeleton sx={{ width: "60%" }} height={20} />
              <Skeleton sx={{ width: "40%" }} height={20} />
            </Box>
          </Box>
        ))}
      </PlayerCardWrapper>
    );
  }

  // ❌ no team
  if (!team) {
    return <Typography variant="h3">Equipo no encontrado.</Typography>;
  }

  return (
    <>
      <HeaderTeam
        img={getLogo(team.name)}
        name={team.name}
        color={team.color}
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      <CardContainer>
        {selectedPlayers.length > 0 ? (
          <>
            {selectedPlayers.map((player, index) => (
              <PlayerCard
                key={`${selectedCategory}-${player.id || index}`}
                idTeam={idTeam ?? undefined}
                category={selectedCategory}
                id={player.id || index}
                name={player.name}
                fullName={player.full_name}
                DNI={player.dni}
                number={player.number}
                position={player.position}
                index={index}
                image={player.image_url || getLogo("Default")}
              />
            ))}

            <ButtonContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={onShare}
                startIcon={<ShareIcon />}
              >
                COMPARTIR
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                onClick={handleBack}
                startIcon={canGoBack ? <ReplyIcon /> : <HomeIcon />}
              >
                {canGoBack ? "VOLVER" : "INICIO"}
              </Button>
            </ButtonContainer>
          </>
        ) : (
          <MessageContent>
            <Typography variant="h3" color="primary">
              Aún no hay jugadores registrados.
            </Typography>

            <Typography variant="h6" color="secondary">
              Por favor contactar con el delegado de su comunidad
            </Typography>
          </MessageContent>
        )}
      </CardContainer>
    </>
  );
};

export default DetailTeam;
