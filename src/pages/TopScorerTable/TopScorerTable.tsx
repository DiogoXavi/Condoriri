import React, { useEffect, useState, useMemo } from "react";
import { HeaderCategory, ScorerCard, Title } from "../../components";
import logo from "../../assets/images/icons/logo1.png";
import { useNavigate, useLocation } from "react-router-dom";
import { categories } from "../../constants/categories";
import { getLogo } from "../../tools/tools";
import { Typography, Button } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import Skeleton from "@mui/material/Skeleton";
import type { CategoryType, IMatch } from "../../types/types";
import { getGoalDetailsByPlayer } from "../../tools/tools";
import { MessageContent, CardContainer, ButtonContainer } from "./styles";

import {
  getTopScorersWithPlayers,
  type ScorerWithPlayer,
} from "../../services/scorers";
import { juvenil } from "../../constants/fixture/juvenil";
import { damas } from "../../constants/fixture/damas";
import { senior } from "../../constants/fixture/senior";

const TopScorerTable: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");

  const [scorers, setScorers] = useState<ScorerWithPlayer[]>([]);
  const [loading, setLoading] = useState(true);

  const isValidCategory = (cat: string | null): cat is CategoryType => {
    return ["Juvenil", "Senior", "Damas", "Infantil"].includes(cat || "");
  };

  const selectedCategory: CategoryType = isValidCategory(categoryParam)
    ? categoryParam
    : "Juvenil";

  const matchesByCategory: Record<CategoryType, IMatch[]> = useMemo(
    () => ({
      Juvenil: juvenil,
      Senior: senior,
      Damas: damas,
      Infantil: [],
    }),
    [],
  );

  useEffect(() => {
    const loadScorers = async () => {
      setLoading(true);

      const matches = matchesByCategory[selectedCategory];

      const data = await getTopScorersWithPlayers(
        matches,
        selectedCategory,
       5, // Limitar a los 5 mejores goleadores por categoría
      );

      setScorers(data);
      setLoading(false);
    };

    loadScorers();
  }, [selectedCategory, matchesByCategory]);

  const handleCategoryChange = (cat: CategoryType) => {
    navigate(`/top-scorers-table?category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

  const canGoBack = window.history.length > 1;

  const handleBack = () => {
    if (canGoBack) navigate(-1);
    else navigate("/");
  };

  const onShare = () => {
    const shareUrl = `${window.location.origin}/top-scorers-table?category=${encodeURIComponent(
      selectedCategory,
    )}`;

    const shareData = {
      title: "Goleadores",
      text: `Lista de goleadores - Categoría: ${selectedCategory}`,
      url: shareUrl,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("URL copiada al portapapeles!");
    }
  };

  return (
    <div>
      <HeaderCategory
        img={logo}
        title={`Goleadores ${selectedCategory}`}
        color="#6cb9ff"
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      <Title title={`Goleadores: ${selectedCategory}`} />

      {loading ? (
        <CardContainer>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "20px",
                padding: "12px",
                width: "100%",
                borderBottom: "1px solid #eee",
              }}
            >
              {/* Ranking */}
              <Skeleton variant="text" width={30} height={30} />

              {/* Avatar */}
              <Skeleton variant="circular" width={50} height={50} />

              {/* Info */}
              <div style={{ flex: 1 }}>
                <Skeleton variant="text" width="60%" height={20} />
                <Skeleton variant="text" width="40%" height={20} />
              </div>

              {/* Goals */}
              <Skeleton variant="text" width={40} height={30} />
            </div>
          ))}
        </CardContainer>
      ) : scorers.length > 0 ? (
        <CardContainer>
          {scorers.map((player) => (
            <ScorerCard
              key={`${player.team}-${player.number}-${player.id}`}
              id={player.id}
              name={player.name}
              fullName={player.fullName}
              number={player.number}
              goals={player.goals}
              teamName={player.team}
              image={player.profile || getLogo(player.team)}
              logoTeam={getLogo(player.team)}
              category={selectedCategory}
              goalDetails={getGoalDetailsByPlayer(
                matchesByCategory[selectedCategory],
                player.number,
                player.team,
              )}
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
        </CardContainer>
      ) : (
        <MessageContent>
          <Typography variant="h3">
            Aún no existen goleadores registrados.
          </Typography>
          <Typography variant="h6">
            Cuando arranque el campeonato estará disponible la tabla de goleadores por categorías.
          </Typography>
        </MessageContent>
      )}
    </div>
  );
};

export default TopScorerTable;
