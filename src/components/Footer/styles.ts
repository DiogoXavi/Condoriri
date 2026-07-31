import styled from '@emotion/styled';

export const Root = styled('div')(() => ({
  gap: '1rem',
}));

export const Image = styled('img')(() => ({
  width: '6.5rem',
  height: '6.5rem',
  borderRadius: '40%',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, filter 300ms',
  willChange: 'filter',
  padding: '1.5rem',
  
  '&:hover': {
    transform: 'scale(1.05)',
    filter: 'drop-shadow(0 0 2em #646cffaa)',
  },

  '&.react:hover': {
    filter: 'drop-shadow(0 0 2em #61dafbaa)',
  },

  "@media (max-width: 900px)": {
   width: '5rem',
   height: '5rem',
   padding: '1rem',
 },
  "@media (max-width: 600px)": {
    width: '4rem',
    height: '4rem',
    padding: '1rem',
  },
}));


export const ImageContent = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
});

export const RightsContainer = styled('div')({
  padding: '0 1rem',
  display: 'flex',
  color: '#1abc9c',
  fontSize: '0.875rem',
  alignItems: 'space-between',
  justifyContent: 'space-between',
  "@media (max-width: 600px)": {
    fontSize: '0.65rem',
     alignItems: 'center',
      flexDirection: 'column',
  },
  "@media (max-width: 900px)": {
    fontSize: '0.75rem',
  },
});
