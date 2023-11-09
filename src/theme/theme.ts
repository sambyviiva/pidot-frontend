import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "grey",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {},
        input: {
          color: "grey",
          borderBottom: " 2px solid grey",
        },
      },
    },
  },
});
