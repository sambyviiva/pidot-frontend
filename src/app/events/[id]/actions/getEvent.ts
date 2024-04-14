"use server";

export const getEvent = async (id: string) => {
  const response = await fetch(
    `${process.env.EXTERNAL_SERVER_URL}/event/${id}`
  );
  const data = await response.json();
  return data;
};
