import React from "react";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";
import { teams as equipos } from "../../constants/teams/teams";
import logo from "../../assets/images/icons/logo1.png";
import { getLogo } from "../../tools/tools";
import {
  Button,
  Divider,
  Typography,
  Alert,
  Skeleton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";
import ShareIcon from "@mui/icons-material/Share";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import {
  Container,
  Image,
  InfoBox,
  InfoText,
  Title,
  Label,
  ButtonContainer,
  InfoContainer,
  ImageBox,
  Logo,
  NoValid,
  HeaderCard,
  HomeButton,
  Root,
} from "./styles";
import { usePlayer } from "../../hooks/usePlayer";

const PlayerDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const idTeam = queryParams.get("idTeam");
  const idPlayer = queryParams.get("idPlayer");
  const category = queryParams.get("category") ?? "";

  // 🚀 hook optimizado
  const {
    data: player,
    isLoading: loading,
    isError,
  } = usePlayer(idPlayer || undefined);

  const canGoBack = React.useMemo(() => {
    return location.key !== "default";
  }, [location.key]);

  if (!idTeam || !idPlayer) {
    return <p>Jugador o equipo no encontrado</p>;
  }

  const team = equipos.find((t) => t.id === Number(idTeam));

  const subTeam = team?.teams.find(
    (sub) => sub.category.toLowerCase() === category.toLowerCase()
  );

  const params = createSearchParams({
    idPlayer,
    idTeam,
    category,
  });

  const playerUrl = `${window.location.origin}/player-detail?${params}`;

  const onShare = () => {
    if (!player || !team) return;

    if (navigator.share) {
      navigator.share({
        title: `Jugador: ${player.name}`,
        text: `Información del jugador ${player.name} del equipo ${team.name}`,
        url: playerUrl,
      });
    } else {
      navigator.clipboard.writeText(playerUrl);
      alert("Link copiado!");
    }
  };

  const handleBack = () => {
    if (canGoBack) navigate(-1);
    else navigate("/");
  };

  if (loading){
  return (
    <Root>
      <HeaderCard>
        <Skeleton variant="circular" width={40} height={40} />
      </HeaderCard>

      <Container>
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            maxWidth: "35rem",
            height: "200px",
            margin: "0 auto 0.5rem",
            borderRadius: "10%",
          }}
        />

        <Skeleton width="60%" height={40} sx={{ margin: "0 auto" }} />
        <Skeleton width="40%" height={30} sx={{ margin: "0 auto" }} />

        <Divider sx={{ my: 2 }} />

        <InfoContainer>
          <InfoBox>
            <Skeleton width="80%" />
            <Skeleton width="70%" />
            <Skeleton width="60%" />
            <Skeleton width="50%" />
          </InfoBox>

          <ImageBox>
            <Skeleton variant="circular" width={80} height={80} />
          </ImageBox>
        </InfoContainer>

        <Divider sx={{ my: 2 }} />

        <ButtonContainer>
          <Skeleton variant="rounded" width={150} height={40} />
          <Skeleton variant="rounded" width={150} height={40} />
        </ButtonContainer>
      </Container>
    </Root>
  );
};

  // ================= ERROR =================
  if (isError || !player || !team) {
    return (
      <NoValid>
        <Typography variant="h2" color="primary">
          Jugador no válido o no habilitado
        </Typography>

        <Typography variant="h6">
          Contacte con el delegado o administración
        </Typography>

        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBack}
          startIcon={canGoBack ? <ReplyIcon /> : <HomeIcon />}
        >
          {canGoBack ? "VOLVER" : "INICIO"}
        </Button>
      </NoValid>
    );
  }

  // ================= UI =================
  return (
    <Root>
      <HeaderCard>
        <Logo src={logo} alt={team.name} />
        <HomeButton color="secondary" onClick={() => navigate("/")}>
          <HomeIcon />
        </HomeButton>
      </HeaderCard>

      <Container>
        <Image src={player.image_url || getLogo("Default")} />

        <Title>
          {player.name} - {player.number}
        </Title>

        <Typography variant="h2" color="primary">
          {player.full_name}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Alert
          iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit" />,
          }}
        >
          <Typography variant="body2" color="secondary">
            HABILITADO PARA JUGAR EL CAMPEONATO CONDORIRI 2026
          </Typography>
        </Alert>

        <Divider sx={{ my: 2 }} />

        <InfoContainer>
          <InfoBox>
            <InfoText>
              <Label>CÓDIGO:</Label>{" "}
              {player.dni ? String(player.dni).slice(-5) : "-"}
            </InfoText>

            <InfoText>
              <Label>Posición:</Label> {player.position}
            </InfoText>

            <InfoText>
              <Label>Equipo:</Label> {team.name}
            </InfoText>

            <InfoText>
              <Label>Categoría:</Label> {subTeam?.category || "-"}
            </InfoText>
          </InfoBox>

          <ImageBox>
            <Logo src={getLogo(team.name)} />
          </ImageBox>
        </InfoContainer>

        <Divider sx={{ my: 2 }} />

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
      </Container>
    </Root>
  );
};

export default PlayerDetail;