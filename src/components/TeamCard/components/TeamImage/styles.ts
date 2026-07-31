import { styled } from '@mui/material/styles';

interface RootProps {
  width?: string | number;
  height?: string | number;
}

export const Root = styled('div')<RootProps>(({ theme, width, height }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  overflow: 'hidden',
  width: width ?? '180px',
  height: height ?? 'auto',
}));

export const Img = styled('img')({
  borderRadius: '25%',
  padding: '0.5rem',
  width: '9rem',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(1)',
  },
  "@media (max-width: 600px)": {
    width: '8rem',
  },
  "@media (max-width: 400px)": {
    width: '6rem',
  },
});
