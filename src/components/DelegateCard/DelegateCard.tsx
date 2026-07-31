import type { FC } from "react";
import { ImageContent, TeamResume } from "./components";
import { Root } from "./styles";


interface IDelegate {
  id: number;
  name: string;
  contact?: string;
  category: string;
}

interface ITeamCardProps {
  id: string | number;
  category: string;
  name: string;
  url?: string;
  img: string;
  delegates: IDelegate[];
}

const TeamCard: FC<ITeamCardProps> = ({ id, name, img, delegates, category, url }) => {
  return (
    <Root>
      <ImageContent img={img} />
      <TeamResume id={id} title={name} delegates={delegates} category={category} url={url} />
    </Root>
  );
};

export default TeamCard;

