import React from "react";
import { Root } from "./styles";
import { TeamCard, Title } from "../../components";
import { teams } from "../../constants/teams/teams";

import { getLogo } from "../../tools/tools";

const Teams: React.FC = () => {
  return (
    <>
      <Root>
        <Title title="Equipos"/>
        {teams.map((item) => (
   
          <TeamCard
            key={item.id}
            id={item.id}
            name={item.name}
            img={getLogo(item.name)}
          />
        ))}
      </Root>
    </>
  );
};

export default Teams;
