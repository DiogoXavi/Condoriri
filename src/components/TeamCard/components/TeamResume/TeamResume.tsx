import type { FC } from "react";
import { Typography, Button } from "@mui/material";
import { Root, DividerLine, ButtonContainer } from "./styles";
import { useNavigate } from "react-router-dom";

interface ProductResumeProps {
  id: string | number;
  title: string;
}

const TeamResume: FC<ProductResumeProps> = ({ id, title }) => {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/team-detail?id=${id}&category=${encodeURIComponent("Juvenil")}`);
  };

  return (
    <Root>
      <div>
        <Typography variant="h1">{title}</Typography>
        <DividerLine />
      </div>
      <div>
        <ButtonContainer>
          <Button
            onClick={handleSeeDetails}
            variant="outlined"
            color="secondary"
            size="small"
            sx={{
              fontWeight: "bold",
              fontSize: "0.8rem",
              padding: "6px 12px",
              borderRadius: "8px",
              boxShadow: 2,
              textTransform: "uppercase",
            }}
          >
            VER PLANTEL
          </Button>
        </ButtonContainer>
      </div>
    </Root>
  );
};

export default TeamResume;
