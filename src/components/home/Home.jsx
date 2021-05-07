import React, { useEffect, useState } from "react";
import "./Home.scss"
import { RecoverMovies, RecoverMoviesByCategory } from "../../service/api";
import Header from "../header/Header";
import CardMovies from "../card/Card";
import {Link}from "react-router-dom"

const Home = () => {
  const [nowPLaying, setNowPlaying] = useState([]);
  const [movieByCategory, setMoviesByCategory] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      setNowPlaying(await RecoverMovies());
      setMoviesByCategory(await RecoverMoviesByCategory());
    };
    fetchApi();
  }, []);
  const tabMovies = [];
  const moviesList = nowPLaying.slice(0, 9).map((movie,index) => {
    tabMovies.push(movie.backPoster);
    return(
        <>
            {index <= 6 && index !== 4 ? <CardMovies key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> : null}
        </>
    )
  });
  return (
    <div>
      <Header firstSrc={tabMovies[7]} secondSrc={tabMovies[5]} thirdSrc={tabMovies[8]} />
      <div className="movies-popular">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title">Populaire</h3>
            <Link to="/film/populaire" className="movies-link">Voir tout</Link>
          </div>
          {moviesList}
        </div>
      </div>
    </div>
  );
};
export default Home;
