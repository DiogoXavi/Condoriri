import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '8px 0px',
  width: '1000px',
  marginLeft: '20px',

  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    width: '100%',
    padding: '2px',
    marginLeft: '10px',
  },
}));

export const DividerLine = styled(Divider)(() => ({
  margin: '5px 0',
  borderColor: '#ccc',
  "@media (max-width: 600px)": {
    margin: '1px 0',
  },
}));

export const ButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "10px",
  width: "100%",
  gap: "40px",
  "@media (max-width: 600px)": {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    alignItems: "center",
  },
}));

export const TitleContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: '0.4rem',
}));
