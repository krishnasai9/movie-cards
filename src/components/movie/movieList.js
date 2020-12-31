import React from "react";
import MovieCard from "./moviecard";
import { Grid } from "@material-ui/core";

const MovieList = (props) => {
  const getMovieCard = MovieObj => {
    return (
      <Grid item xs={12} sm={4}>
        <MovieCard {...MovieObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} style={{marginTop:20, marginBottom:20}}>
      {props.movieList.map(MovieObj => getMovieCard(MovieObj))}
    </Grid>
  );
};

export default MovieList;