import { useState } from "react";
import { fetchMovieDetails } from "../api/fetchMovieDetails";
const FetchMovieData = () => {
  const [movieInp, setMovieInp] = useState<string>("");
  const [movieData, setMovieData] = useState([]);
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchMovieDetails(movieInp).then(setMovieData);
  };
  return (
    <>
      <div style={{}}>
        <form onSubmit={handleForm}>
          <label htmlFor="movie">Search Movie: </label>
          <input
            type="text"
            id="movie"
            value={movieInp}
            onChange={(e) => setMovieInp(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <ul>
        {movieData.Title && <li>Title: {movieData.Title}</li>}
        {movieData.Year && <li>Year: {movieData.Year}</li>}
        {movieData.imdbRating && <li>IMDB Rating: {movieData.imdbRating}</li>}
        {movieData.Plot && <li>Plot: {movieData.Plot}</li>}
        {movieData.Actors && <li>Actors: {movieData.Actors}</li>}
      </ul>
    </>
  );
};

export default FetchMovieData;
