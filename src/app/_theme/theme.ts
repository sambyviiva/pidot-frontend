import { createTheme } from "@mui/material";
import { orange, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      dark: orange[700],
    },
    secondary: {
      main: grey[200],
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
          ":before": {
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
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
            borderWidth: 2,
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
          color: theme.palette.secondary.main,
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
          ":before": {
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
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
