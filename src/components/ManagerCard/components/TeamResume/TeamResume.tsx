import type { FC } from "react";
import { Button, Typography } from "@mui/material";
import { Root, DividerLine, ButtonContainer, TitleContainer } from "./styles";
import { FaWhatsapp } from "react-icons/fa";

interface TeamResumeProps {
  id: string | number;
  name: string;
  cargo: string;
  number: string;
}

const TeamResume: FC<TeamResumeProps> = ({
  name,
  cargo,
  number,
}) => {
  const handleContact = (number: string, name: string) => {
    const message = `Hola ${name}, me gustaría obtener más información sobre el campeonato por favor.`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <Root>
      <TitleContainer>
        <Typography variant="h2" color="secondary">
          {name}
        </Typography>
      </TitleContainer>

      <DividerLine />

      <Typography
        variant="h4"
        color="primary"
        sx={{ marginTop: 1, marginBottom: 1 }}
      >
      CARGO: {cargo} - TEL.: {number}
      </Typography>

      <ButtonContainer>
        <Button
  onClick={() => handleContact(number, name)}
  variant="outlined"
  startIcon={<FaWhatsapp />}
  sx={{
    color: "#25D366",
    borderColor: "#25D366",
    "&:hover": {
      color: "#128C7E",
      borderColor: "#128C7E",
      backgroundColor: "rgba(37, 211, 102, 0.08)",
    },
  }}
>
  CONTACTAR
</Button>
      </ButtonContainer>
    </Root>
  );
};

export default TeamResume;