// Fetching
const response: Response = await fetch("https://swapi.dev/api/films");

const data = await response.json();

console.log({ data });
