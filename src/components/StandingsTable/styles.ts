import styled  from '@emotion/styled';

export const TableContainer = styled('div')( ({
  width: '100%',
  overflowX: 'auto',
  marginTop: '0.6rem',
}));

export const Table = styled('table') ({
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '14px',
});

export const TableHead = styled('thead')(() => ({
  backgroundColor: '#f5f5f5',
}));

export const TableBody = styled('tbody')(() => ({
  backgroundColor: '#fff',
}));

export const TableRow = styled('tr')(() => ({
  borderBottom: '1px solid #ddd',
}));

export const TableCell = styled('td')({
  padding: '0.30rem',
});

export const Logo = styled('img')({
  width: '25px',
  height: '25px',
  objectFit: 'contain',
  marginRight: '0.5rem',
});

export const TeamName = styled('span')(() => ({
  verticalAlign: 'middle',
  marginLeft: '0.15rem',
}));

export const TitleTeam = styled('div')({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
  width: '100%',
  padding: '0.5rem 0',
  // fontWeight: 'bold',
  color: '#333',
  fontSize: '14px',
  lineHeight: '1.5',
});

export const ButtonContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
}));
