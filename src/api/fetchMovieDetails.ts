export const fetchMovieDetails = async (movieName: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=aa0ac620&t=${movieName}`
  );
  return await response.json();
};
