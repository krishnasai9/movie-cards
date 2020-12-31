import React from "react";
import {getMovies} from "./movieService";
import MovieList from './movieList';

const Movies = () => {

  const [movies, setMovies] = React.useState(getMovies());

  console.log('movies',movies);

  return (
    <MovieList movieList={movies} />
  );
};

export default Movies;