import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingX: '200px',
        alignItems: "center",
        backgroundColor: "pink",
        marginTop: "auto",
        height: "100px",
      }}
    >
      <Typography>Privacy police etc</Typography>
      <Typography>Copyright Sami Valkonen</Typography>
    </Box>
  );
};

export default Footer;
