import React, { useEffect, useState } from "react";
import "./Home.scss"
import { RecoverMovies, RecoverMoviesByCategory, RecoverTopratedMovies } from "../../service/api";
import Header from "../header/Header";
import CardMovies from "../card/Card";
import {Link}from "react-router-dom"

const Home = () => {
  const [nowPLaying, setNowPlaying] = useState([]);
  const [topratedMovies, setTopratedMovies] = useState([])
  const [movieByCategory, setMoviesByCategory] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      setNowPlaying(await RecoverMovies());
      setMoviesByCategory(await RecoverMoviesByCategory());
      setTopratedMovies(await RecoverTopratedMovies());
    };
    fetchApi();
  }, []);
  const tabMovies = [];
  const moviesPopularList = nowPLaying.slice(0, 9).map((movie,index) => {
    tabMovies.push(movie.backPoster);
    return(
        <>
            {index <= 6 && index !== 4 ? <CardMovies key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> : null}
        </>
    )
  });
  const moviesTopratedList = topratedMovies.slice(0,6).map((movie,index) => {
    return(
      <>
        <CardMovies key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> 
      </>
    )
  })
  return (
    <div>
      <Header firstSrc={tabMovies[7]} secondSrc={tabMovies[5]} thirdSrc={tabMovies[8]} />
      <div className="movies-popular">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title">Populaire</h3>
            <Link to="/film/populaire" className="movies-link">Voir tout</Link>
          </div>
          {moviesPopularList}
        </div>
      </div>
      <div className="movies-toprated">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title">A la une</h3>
            <Link to="/film/populaire" className="movies-link">Voir tout</Link>
          </div>
          {moviesTopratedList}
        </div>
      </div>
    </div>
  );
};
export default Home;
