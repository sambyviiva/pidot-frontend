import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface IEvent {
  name: string;
  startDate: Date;
  endDate: Date;
}

function App() {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const e = await axios.get("https://pidot-event-api.onrender.com/event");
      setEvents(e.data);
    };

    fetchData().catch(console.error);
  }, []);
  return (
    <>
      <div>events:</div>
      <div>
        {events?.map((e) => (
          <div>{e.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
