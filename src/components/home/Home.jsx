import React, { useEffect, useState } from "react";
import "./Home.scss"
import { nowPlayingMovies, popularMoviesList , topratedMoviesList } from "../../service/api";
import Header from "../header/Header";
import CardMovies from "../card/Card";
import {Link} from "react-router-dom"
import Footer from "../footer/Footer";

const Home = () => {
  const [nowPLaying, setNowPlaying] = useState([]);
  const [topratedMovies, setTopratedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setNowPlaying(await nowPlayingMovies);
      setTopratedMovies(await topratedMoviesList);
      setPopularMovies(await popularMoviesList);
    };
    fetchApi();
  }, []);

  const tabMovies = [];
  const moviesNowPlaying = nowPLaying.slice(0, 9).map((movie,index) => {
    tabMovies.push(movie.backPoster);
    return(
        <>
            {index <=5 ? <CardMovies className="container-card col-md-2 col-sm-3" text="Evaluation : " key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> : null}
        </>
    )
  });

  const moviesTopratedList = topratedMovies.slice(0,6).map((movie,index) => {
    return(
      <>
        <CardMovies className="container-card col-md-2 col-sm-3" text="Evaluation : " key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> 
      </>
    )
  });

  const moviesPopularList = popularMovies.slice(12,18).map((movie,index) => {
    return(
      <>
        <CardMovies className="container-card col-md-2 col-sm-3" text="Evaluation : " key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> 
      </>
    )
  });

  return (
    <div>
      <Header firstSrc={tabMovies[0]} secondSrc={tabMovies[1]} thirdSrc={tabMovies[5]} />

      <div className="movies-nowplaying">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title text-info">A la une</h3>
            <Link to="/film/populaire" className="movies-link bg-info">Voir tout</Link>
          </div>
          {moviesNowPlaying}
        </div>
      </div>

      <div className="movies-toprated">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title text-info">Les mieux notés</h3>
            <Link to="/film/populaire" className="movies-link bg-info">Voir tout</Link>
          </div>
          {moviesTopratedList}
        </div>
      </div>

      <div className="movies-popular">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title text-info">Populaires</h3>
            <Link to="/film/populaire" className="movies-link bg-info">Voir tout</Link>
          </div>
          {moviesPopularList}
        </div>
      </div>
        
      <Footer />
    </div>
  );
};
export default Home;
