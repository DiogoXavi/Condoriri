import type { TypographyVariantsOptions } from '@mui/material/styles'
import palette, { custom } from './palette'

const typography: TypographyVariantsOptions = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: '1.5rem',
    fontWeight: 500,
    color: palette.text?.primary,
    textTransform: 'uppercase',
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 450,
    color: palette.text?.secondary,
  },
  h3: {
    fontSize: '1.25rem',
    fontWeight: 450,
    color: custom.textExtra?.green,
  },
  h4: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 400,
  },
  h6: {
    fontSize: '0.8rem',
    fontWeight: 400,
  },
  body1: {
    fontSize: '0.67rem',
    fontWeight: 350,
  },
  body2: {
    fontSize: '0.675rem',
    fontWeight: 350,
  },
  button: {
    textTransform: 'none',
    fontWeight: 400,
  },
}

export default typography
