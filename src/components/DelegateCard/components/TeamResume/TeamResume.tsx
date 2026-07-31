import type { FC } from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Root, DividerLine, ButtonContainer, TitleContainer } from "./styles";
//import ShareIcon from "@mui/icons-material/Share";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ContactsIcon from '@mui/icons-material/Contacts';
import { teams } from "../../../../constants/teams/teams";
import type { ITeam } from "../../../../types/types";

interface IDelegate {
  id: number;
  name: string;
  contact?: string;
  category: string;
}
interface TeamResumeProps {
  id: string | number;
  title: string;
  url?: string;
  category: string;
  delegates: IDelegate[];
}

const TeamResume: FC<TeamResumeProps> = ({
  id,
  title,
  delegates,
  url,
  category,
}) => {

const normalizeTeamName = (name: string) => {
  return name
    .replace(/\s+['"]?[AB]['"]?\s*$/i, "")
    .trim()
    .toLowerCase();
};

const getIdTeam = (name: string) => {
  const normalizedName = normalizeTeamName(name);

  const team = teams.find(
    (t: ITeam) =>
      normalizeTeamName(t.name) === normalizedName
  );

  return team ? team.id : null;
};
  const navigate = useNavigate();
  const handleShowTeam = (name: string, category: string) => {
    navigate(`/team-detail?id=${getIdTeam(name)}&category=${encodeURIComponent(category)}`);
  };

  return (
    <Root>
      <TitleContainer>
        <Typography variant="h2" color="secondary">
          #{id}
          {" - "}
          {title}
        </Typography>
      </TitleContainer>
      <DividerLine />
      <div>
        <Typography
          variant="h4"
          color="primary"
          sx={{ marginTop: 1, marginBottom: 1 }}
        >
          Delegados:
        </Typography>
        {delegates.length > 0 ? (
          delegates.map((del, index) => (
            <div key={`${del.id}-${del.category}-${index}`}>
              <Typography variant="body1">
                {del.name} <strong>Categoría:</strong> {del.category}
              </Typography>
            </div>
          ))
        ) : (
          <Typography variant="body1">No Registrados</Typography>
        )}
      </div>
      <ButtonContainer>
        <Button
          onClick={() => handleShowTeam(title, category)}
          variant="outlined"
          startIcon={<ContactsIcon />}
        >
        VER PLANTEL
        </Button>
      {url && (
          <Button
            onClick={() => {
              window.open(url);
            }}
            variant="contained"
            startIcon={<BorderColorIcon />}
          >
            PRE-INSCRIPCION
          </Button>
      )}
      </ButtonContainer>
    </Root>
  );
};

export default TeamResume;
