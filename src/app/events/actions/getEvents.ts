export const getEvents = async () => {
  // const response = await fetch(`https://pidot-event-api.onrender.com/event`, {
  console.log("fetching events");
  const response = await fetch(`http://127.0.0.1:8000/event`);
  const body = await response.json();

  console.log(`response: ${JSON.stringify(body)}`);

  return body;
};
