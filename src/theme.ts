import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#1B3646",
    },
    secondary: {
      main: "#595959",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    body1: {},
    body2: {
      fontWeight: 400,
      fontSize: "15.39px",
      lineHeight: "18.77px",
    },
    h1: {},
    h2: {},
    h3: {},
    h4: {
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "39.01px",
      color: "#4F4F4F",
    },
    h5: {
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "36.57px",
    },
    h6: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "29.26px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: "15.97px",
          lineHeight: "19.47px",
        },
      },
    },
  },
});

export default theme;
