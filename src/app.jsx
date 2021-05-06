import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";


const App = () => {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie:id" component={MovieDetails} exact />
        </Switch>
      </main>
    </div>
  );
};
export default App;
