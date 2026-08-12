import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '1250px',
  height: '100%',
  gap: '20px',
  padding: '10px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  boxShadow: theme.shadows[1],
  
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
[theme.breakpoints.down('lg')]: {
    gap: '10px',
    width: '700px',
  },
  [theme.breakpoints.down('md')]: { 
    padding: "0px 8px 5px",
    gap: '5px',
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
