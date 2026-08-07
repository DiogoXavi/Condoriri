import React from "react";
import { Tooltip, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {
  Logo,
  LogoContainer,
  StyledChip,
  BoxContainer,
  Title,
  TitleContainer,
  HomeButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import type { CategoryType } from "../../types/types";

interface HeaderTeamChipsProps {
  img: string;
  name: string;
  color: string;
  category: CategoryType[];
  selectedCategory: CategoryType;
  onCategoryChange: (cat: CategoryType) => void;
}

const HeaderTeam: React.FC<HeaderTeamChipsProps> = ({
  img,
  name,
  color,
  category,
  selectedCategory,
  onCategoryChange,
}) => {
  const navigate = useNavigate();

  return (
    <BoxContainer color={color}>
      <TitleContainer>
        <LogoContainer onClick={() => navigate("/")}>
          <Logo src={img} alt={name} />
          <Title>{name}</Title>
        </LogoContainer>
        <Tooltip title="Compartir">
          <HomeButton color="secondary" onClick={() => navigate("/")}>
            <HomeIcon />
          </HomeButton>
        </Tooltip>
      </TitleContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          flexWrap: "wrap",
          mt: 1,
        }}
      >
        {category.map((cat) => (
          <StyledChip
            key={cat}
            label={cat}
            clickable
            activecolor={color}
            selected={selectedCategory === cat}
            onClick={() => onCategoryChange(cat)}
          />
        ))}
      </Box>
    </BoxContainer>
  );
};

export default HeaderTeam;
