import type { FC } from "react";
// import { Link } from 'react-router-dom';
import { ImageContent, TeamResume } from "./components";
import { Root } from "./styles";

interface ProductCardProps {
  id: string | number;
  name: string;
  img: string;
}

const TeamCard: FC<ProductCardProps> = ({
  id,
  name,
  img,
}) => {
  return (
    <Root>
      <ImageContent img={img} />
      <TeamResume
        id={id}
        title={name}
  
      />
    </Root>
  );
};

export default TeamCard;
