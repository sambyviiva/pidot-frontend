import { Box, Container } from "@mui/material";

interface IContainerProps {
  children: React.ReactNode;
}

const AppContainer = (props: IContainerProps) => {
  return <Container maxWidth="md">{props.children}</Container>;
};

export default AppContainer;
