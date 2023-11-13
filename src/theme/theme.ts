import { createTheme } from "@mui/material";
import { green, orange, grey } from "@mui/material/colors";

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
    MuiInput: {
      styleOverrides: {
        root: {
          color: grey[500],
          borderBottom: `1px solid ${grey[500]}`,
          ":hover": {
            borderBottom: `1px solid ${grey[700]}`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: orange[500],
            borderWidth: 2,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: orange[500],
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: grey[500],
        },
      },
    },
  },
});
