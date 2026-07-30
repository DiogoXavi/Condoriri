import React from "react";
import { Tooltip, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {
  Logo,
  LogoContainer,
  StyledChip,
  BoxContainer,
  TitleContainer,
  HomeButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import type { CategoryType } from "../../types/types";

interface HeaderCategoryChipsProps {
  img: string;
  title?: string;
  color: string;
  category: string[];
  selectedCategory: CategoryType;
  onCategoryChange: (cat: CategoryType) => void;
  shareUrl?: string;
}

const  HeaderCategory: React.FC<HeaderCategoryChipsProps> = ({
  img,
  title,
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
          <Logo src={img} alt={title} />
        </LogoContainer>
        <Tooltip title="Ir al inicio">
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
        }}
      >
        {category.map((cat) => (
          <StyledChip
            key={cat}
            label={cat}
            clickable
            activecolor={color}
            selected={selectedCategory === (cat as CategoryType)}
            onClick={() => onCategoryChange(cat as CategoryType)}
          />
        ))}
      </Box>
    </BoxContainer>
  );
};

export default HeaderCategory;
