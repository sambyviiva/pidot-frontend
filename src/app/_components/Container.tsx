import { Box, Container } from "@mui/material";

interface IContainerProps {
  children: React.ReactNode;
}

const AppContainer = (props: IContainerProps) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "5px" }}>
      {props.children}
    </Container>
  );
};

export default AppContainer;
