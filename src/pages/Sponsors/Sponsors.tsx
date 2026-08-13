import { Title } from "../../components";
import { Typography } from "@mui/material";
import { Root } from "./styles";

const Sponsors: React.FC = () => {
  return (
    <Root>
      <Title title="Sponsors Oficiales" />
      <Typography variant="body2">Lista de patrocinadores se mostrará aquí.</Typography>
    </Root>
  );
};

export default Sponsors;
