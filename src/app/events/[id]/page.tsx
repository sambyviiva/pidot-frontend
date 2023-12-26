import { Box, Typography } from "@mui/material";

interface IProps {
  params: {
    id: string;
  };
}

const Event = async (props: IProps) => {
  // const response = 
  return (
    <Box>
      <Typography color="secondary">{`Route: ${props.params.id}`}</Typography>
    </Box>
  );
};

export default Event;
