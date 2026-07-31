import styled from '@emotion/styled';

export const Root = styled('div')({
  position: 'fixed',

  top: '0',
  left: 0,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  overflowY: 'auto',
  boxSizing: 'border-box',
});