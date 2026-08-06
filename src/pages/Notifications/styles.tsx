import styled from '@emotion/styled';

export const Title = styled('h1')(() => ({
  margin: '1rem',
  fontSize: '24px',
  "@media (max-width: 600px)": {    
    fontSize: '18px',
  }
}));

export const Container = styled('div')({
  // margin: '1rem',
})
