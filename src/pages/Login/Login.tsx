import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../../assets/images/logos/logo1.png";
import { useAuth } from "../../context/auth.context";

import {
  Container,
  LoginCard,
  Header,
  Form,
  Field,
  ErrorMessage,
  LoginButton,
  ImageContent,
  CancelButton,
} from "./styles";

const Login: React.FC = () => {
  const { user, signIn, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  if (loading) {
    return <Typography>Cargando...</Typography>;
  }
  if (user) {
    const from = location.state?.from;

    if (from) {
      return (
        <Navigate
          to={`${from.pathname}${from.search || ""}${from.hash || ""}`}
          replace
        />
      );
    }
    return <Navigate to="/" replace />;
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const { error: signInError } = await signIn(email, password);
    if (signInError) {
      setError("Email o contraseña incorrectos");
      return;
    }

    const from = location.state?.from;

    if (from) {
      navigate(`${from.pathname}${from.search || ""}${from.hash || ""}`, {
        replace: true,
      });
    } else {
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <Container>
      <LoginCard>
        <ImageContent>
          <img src={logo} alt="Logo de campeonato" />
        </ImageContent>
        <Header>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
            }}
          >
            Campeonato de Futbol Distrito-7
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Ingrese un usuario y una contraseña para registrarse y participar en el campeonato.
          </Typography>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Field
            required
            fullWidth
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            required
            fullWidth
            label="Contraseña"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      aria-label={
                        showPassword
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <LoginButton type="submit" variant="contained" disabled={loading}>
            {loading ? "INGRESANDO..." : "INGRESAR"}
          </LoginButton>
          <CancelButton
            type="button"
            variant="outlined"
            onClick={() => navigate("/")}
          >
            CANCELAR
          </CancelButton>
        </Form>
      </LoginCard>
    </Container>
  );
};

export default Login;
