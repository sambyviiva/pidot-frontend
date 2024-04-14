"use client";

import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import { useEffect, useState, useMemo } from "react";

const checkValidColor = (color: string) => {
  const Reg_Exp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
  return Reg_Exp.test(color);
};

const Colors = () => {
  const theme = useTheme();
  const [primaryColor, setPrimaryColor] = useState("#0de081");
  const [primaryColorField, setPrimaryColorField] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("#e08181");
  const [secondaryColorField, setSecondaryColorField] = useState("");
  const [background, setBackground] = useState("");
  const [backgroundField, setBackgroundField] = useState("");

  const theme2 = useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: primaryColor },
          secondary: { main: secondaryColor },
        },
      }),
    [primaryColor, secondaryColor]
  );

  return (
    <ThemeProvider theme={theme2}>
      <Box
        sx={{
          backgroundColor: `${background} !important`,
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="primary">
          Otsikko Primary
        </Typography>
        <Typography color="secondary">Teksti Secondary</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", width: "300px" }}>
          <TextField
            sx={{ mt: 4 }}
            label="Change Primary Color"
            color="primary"
            variant="outlined"
            value={primaryColorField}
            onChange={(e) => setPrimaryColorField(e.target.value)}
          />
          <TextField
            sx={{ mt: 4 }}
            label="Change Secondary Color"
            variant="outlined"
            value={secondaryColorField}
            onChange={(e) => setSecondaryColorField(e.target.value)}
          />
          <TextField
            sx={{ mt: 4 }}
            label="Change Background Color"
            variant="outlined"
            value={backgroundField}
            onChange={(e) => setBackgroundField(e.target.value)}
          />
          <Button
            sx={{ mt: 4 }}
            variant="outlined"
            onClick={() => {
              setBackground(backgroundField);
              setPrimaryColor(primaryColorField);
              setSecondaryColor(secondaryColorField);
            }}
          >
            Vaihda
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Colors;
