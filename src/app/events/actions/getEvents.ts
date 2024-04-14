export const getEvents = async () => {
  // const response = await fetch(`https://pidot-event-api.onrender.com/event`, {
  console.log("fetching events");
  const response = await fetch(
    `${process.env.EXTERNAL_SERVER_URL}/event`,
    {
      cache: "no-store",
    }
  );
  const body = await response.json();

  console.log(`response: ${JSON.stringify(body)}`);

  return body;
};
