import React, { useEffect, useState } from "react";
import "./Home.scss"
import { nowPlayingMovies, popularMoviesList , topratedMoviesList , upcomingMoviesList} from "../../service/api";
import Header from "../header/Header";
import CardMovies from "../card/Card";
import {Link} from "react-router-dom"
import Footer from "../footer/Footer";

const Home = () => {
  const [nowPLaying, setNowPlaying] = useState([]);
  const [topratedMovies, setTopratedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setNowPlaying(await nowPlayingMovies);
      setTopratedMovies(await topratedMoviesList);
      setPopularMovies(await popularMoviesList);
      setUpcomingMovies(await upcomingMoviesList);
    };
    fetchApi();
  }, []);

  // const moviesUpcomingList = upcomingMovies.slice(0,6).map((movie,index) => {
  //   return(
  //     <>
  //       <CardMovies key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> 
  //     </>
  //   )
  // })

  const tabMovies = [];
  const moviesNowPlaying = nowPLaying.slice(0, 9).map((movie,index) => {
    tabMovies.push(movie.backPoster);
    return(
        <>
            {index <=5 ? <CardMovies key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> : null}
        </>
    )
  });

  const moviesTopratedList = topratedMovies.slice(0,6).map((movie,index) => {
    return(
      <>
        <CardMovies key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> 
      </>
    )
  });

  const moviesPopularList = popularMovies.slice(12,18).map((movie,index) => {
    return(
      <>
        <CardMovies key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> 
      </>
    )
  });

  return (
    <div>
      <Header firstSrc={tabMovies[0]} secondSrc={tabMovies[1]} thirdSrc={tabMovies[2]} />
      {/* <div className="movies-nowplaying">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title">A venir</h3>
            <Link to="/film/populaire" className="movies-link">Voir tout</Link>
          </div>
          {upcomingMoviesList}
        </div>
      </div> */}

      <div className="movies-nowplaying">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title">A la une</h3>
            <Link to="/film/populaire" className="movies-link">Voir tout</Link>
          </div>
          {moviesNowPlaying}
        </div>
      </div>

      <div className="movies-toprated">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title">Les mieux notés</h3>
            <Link to="/film/populaire" className="movies-link">Voir tout</Link>
          </div>
          {moviesTopratedList}
        </div>
      </div>

      <div className="movies-popular">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title">Populaires</h3>
            <Link to="/film/populaire" className="movies-link">Voir tout</Link>
          </div>
          {moviesPopularList}
        </div>
      </div>
        
      <Footer />
    </div>
  );
};
export default Home;
