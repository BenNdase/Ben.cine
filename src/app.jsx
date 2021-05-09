import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Movie from "./components/movies/Movie";
import MovieDetails from "./components/movieDetails/MovieDetails";


const App = () => {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/films" component={Movie} exact />
          <Route path="/movie:id" component={MovieDetails} exact />
        </Switch>
      </main>
    </div>
  );
};
export default App;
