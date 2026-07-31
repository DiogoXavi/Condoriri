import { styled } from '@mui/material/styles';
import { Typography, Divider } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  width: '1000px',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    width: '100%',
    padding: '10px',
  },
}));

export const OldPrice = styled(Typography)(() => ({
  textDecoration: 'line-through',
  color: '#888',
  fontSize: '1.2rem',
  padding: '0 5px',
}));

export const DividerLine = styled(Divider)(() => ({
  margin: '10px 0',
  borderColor: '#ccc',
}));

export const ButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "40px",
  "@media (max-width: 600px)": {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));