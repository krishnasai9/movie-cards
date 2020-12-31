
import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Movies from "../components/movie/movies";
 // import Movies from './Movie/Movies';

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
         <Movies/>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;