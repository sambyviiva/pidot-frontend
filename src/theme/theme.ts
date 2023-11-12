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
    MuiInput: {
      styleOverrides: {
        root: {
          color: "grey",
          "&:before": {
            borderBottom: "1px solid grey",
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
            borderColor: orange[800],
            borderWidth: 2,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "grey",
        },
      },
    },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {},
    //     input: {
    //       color: "grey",
    //       borderBottom: "2px solid grey",
    //     },
    //   },
    // },
  },
});
