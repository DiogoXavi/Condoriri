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
  padding: '0.5rem',
  borderRadius: '25%',
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
});
