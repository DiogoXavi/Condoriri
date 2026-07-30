import { colors } from '@mui/material';
import type { PaletteOptions } from '@mui/material/styles';

const white = '#FFF';
const black = '#000';

const palette: PaletteOptions = {
  mode: 'light',
  common: {
    black,
    white,
  },
  primary: {
    main: '#22b7be',
    contrastText: black,
  },
  secondary: {
    main: 'rgba(4, 47, 81, 0.9)',
    contrastText: white,
  },
  error: {
    light: colors.red[400],
    main: colors.red[600],
    dark: colors.red[900],
    contrastText: white,
  },
  text: {
    primary: 'rgba(4, 47, 81, 0.9)',
    secondary: 'rgba(4, 49, 78, 0.55)',
    disabled: 'rgba(63, 62, 62, 0.8)',
  },
  background: {
    default: '#ebebeb',
    paper: white,
  },
  divider: colors.grey[300],
};

export const custom = {
  textExtra: {
    green: '#007337',
    lightGreen: '#00A650',
    link: colors.blue[600],
  },
  background: {
    header: '#ffe600',
  },
  icon: colors.blueGrey[600],
  link: colors.blue[800],
};

export default palette;
