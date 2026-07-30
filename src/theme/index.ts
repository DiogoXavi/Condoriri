import { createTheme } from '@mui/material/styles'

import palette from './palette'
import typography from './typography'

const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'menu' },
          style: {
            backgroundColor: 'transparent',
            textTransform: 'none',
            fontSize: 14,
            fontWeight: 400,
            padding: '10px 8px',
          },
        },
      ],
    },
  },
})
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    menu: true
  }
}

export default theme
