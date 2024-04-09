"use server"

export const getEvent = async (id: string) => {
    const response = await fetch(`http://127.0.0.1:8000/event/${id}`);
    const data = await response.json();
    return data;
}