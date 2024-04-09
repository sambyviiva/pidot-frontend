"use client";

import { Box, Button, TextField, useTheme } from "@mui/material";
import { useState } from "react";

const Colors = () => {
  const theme = useTheme();
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        label="Primary Color"
        variant="outlined"
        value={primaryColor}
        onChange={(e) => setPrimaryColor(e.target.value)}
      />
      <TextField
        label="Secondary Color"
        variant="outlined"
        value={secondaryColor}
        onChange={(e) => setSecondaryColor(e.target.value)}
      />
      <Button
        onClick={() => {
          theme.palette.primary.main = primaryColor;
          theme.palette.secondary.main = secondaryColor;
        }}
      >
        Vaihda
      </Button>
    </Box>
  );
};

export default Colors;
