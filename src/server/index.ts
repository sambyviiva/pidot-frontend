import { publicProcedure, router } from "./trpc";

export const eventRouter = router({
  getEvents: publicProcedure.query(async ({ ctx }) => {
    const url = "https://pidot-event-api.onrender.com/event";

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    const response = await fetch(url, options);

    return response.json();
  }),
});

export type AppRouter = typeof eventRouter;

interface Event {
  id: string;
  name: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

const eventList: Event[] = [
  {
    id: "asdf",
    location: "helsinki",
    name: "tapahtuma",
    startDate: new Date("2022-12-17T03:24:00"),
    endDate: new Date("2022-12-17T03:24:00"),
  },
];
