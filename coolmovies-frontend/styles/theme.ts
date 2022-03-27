import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  status: {
        danger: '#e53e3e',
  },
  palette: {
    primary: {
        main: '#7B1E99', // Violet
        darker: '#290A33',
    },
    secondary: {
        main: '#41D3BD' // Turquoise
    },
    neutral: {
        main: '#FFFFF2' // Ivory
    },
  },
});

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  
    interface Palette {
      neutral: Palette['primary'];
    }
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }
  
    interface PaletteColor {
      darker?: string;
    }
    interface SimplePaletteColorOptions {
      darker?: string;
    }
    interface ThemeOptions {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  }