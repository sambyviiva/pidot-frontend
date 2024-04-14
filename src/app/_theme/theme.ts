import { createTheme } from "@mui/material";
import { orange, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#37966f",
      dark: "#356859",
      // main: orange[500],
      // dark: orange[700],
    },
    secondary: {
      main: "#fd5523",
      // main: grey[200],
      light: grey[100],
    },

    // background: {},
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.light,
          backgroundColor: theme.palette.primary.dark,
          paddingLeft: "8px",
          height: "40px",
          ":before": {
            borderBottom: `1px solid ${theme.palette.primary.dark}`,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
            // borderWidth: 2,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
          },
          "&:focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "green",
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: ({ theme }) => ({
          // color: theme.palette.secondary.main,
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.light,
          ":before": {
            // borderBottom: `1px solid ${theme.palette.secondary.main}`,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.light,
          zIndex: 100,
          paddingLeft: "8px",
          paddingTop: "4px",
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
          // "&.Mui-checked": {
          //   color: palette.secondary,
          // }
        }),
      },
    },
  },
});
