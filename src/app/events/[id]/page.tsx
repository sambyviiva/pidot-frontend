import { Box, SxProps } from "@mui/material";
import { getEvent } from "./actions/getEvent";
import EventInfo from "./components/EventInfo";

interface IProps {
  params: {
    id: string;
  };
}

const pageContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const eventsContainer: SxProps = {
  width: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Event = async (props: IProps) => {
  const event = await getEvent(props.params.id);
  return (
    <Box sx={pageContainer}>
      <EventInfo event={event} />
    </Box>
  );
};

export default Event;
