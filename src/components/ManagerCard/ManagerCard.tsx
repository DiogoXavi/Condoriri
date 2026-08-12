import type { FC } from "react";
import { ImageContent, TeamResume } from "./components";
import { Root } from "./styles";

interface ITeamCardProps {
  id: string | number;
  name: string;
  cargo: string;
  number: string;
  img: string;
}

const ManagerCard: FC<ITeamCardProps> = ({ id, name, img, cargo, number }) => {
  return (
    <Root>
      <ImageContent img={img} />
      <TeamResume id={id} name={name} cargo={cargo} number={number} />
    </Root>
  );
};

export default ManagerCard;

