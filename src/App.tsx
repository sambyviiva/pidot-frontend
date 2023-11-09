import { Box, SxProps } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes
} from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import CreateNew from "./pages/CreateNew";
import MyEvents from "./pages/MyEvents";

interface IEvent {
  name: string;
  startDate: Date;
  endDate: Date;
}

const appStyles: SxProps = {
};

export const pages = [
  { name: "New Event", id: "new" },
  { name: "My Events", id: "my" },
];

export const APP_NAME = "PIDOT"

function App() {
  // const [events, setEvents] = useState<IEvent[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const e = await axios.get("https://pidot-event-api.onrender.com/event");
  //     setEvents(e.data);
  //   };

  //   fetchData().catch(console.error);
  // }, []);
  return (
    <>
      <Box sx={appStyles}>
        <AppNavBar />
        {/* <div>events:</div>
        <div>
          {events?.map((e) => (
            <div key={e.name + Math.random()}>{e.name}</div>
          ))}
        </div>
        <Link to="/my">My</Link> */}
        <Routes>
          <Route path="/" element={<div>Hello world!</div>} />
          <Route path="/my" element={<MyEvents penkki={123} />} />
          <Route path="/new" element={<CreateNew penkki={123} />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
