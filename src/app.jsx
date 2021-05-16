import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Movie from "./components/movies/Movie";
import MovieDetails from "./components/movies/details/MovieDetails";
import SearchTerm from "./components/movies/search/SearchTerm";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/films" component={Movie} exact />
          <Route path="/films/:id" component={MovieDetails} exact />
          <Route path="/recherche/:search" component={SearchTerm} exact />
        </Switch>
        <Footer />
      </main>
    </div>
  );
};
export default App;
