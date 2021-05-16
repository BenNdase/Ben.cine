import React, { useEffect, useState } from "react";
import "./Home.scss";
import { popularMoviesList } from "../../service/api";
import Header from "../header/Header";
import Card from "../card/Card";
import {Link} from "react-router-dom"

const Home = () => {
  // const [nowPLaying, setNowPlaying] = useState([]);
  // const [topratedMovies, setTopratedMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      // setNowPlaying(await nowPlayingMovies);
      // setTopratedMovies(await topratedMoviesList);
      setMovies(await popularMoviesList);
    };
    fetchApi();
    window.scroll(0,0);
  }, []);

  const tabMovies = [];
  // const moviesNowPlaying = nowPLaying.slice(0, 12).map((movie,index) => {
    
  //   return(
  //       <>
  //         <Card className="container-card col-md-2 col-sm-3" text="Evaluation : " key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} />
  //       </>
  //   )
  // });

  // const moviesTopratedList = topratedMovies.slice(0,6).map((movie,index) => {
  //   return(
  //     <>
  //       <Card className="container-card col-md-2 col-sm-3" text="Evaluation : " key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> 
  //     </>
  //   )
  // });

  const moviesPopularList = movies.slice(0,12).map((movie,index) => {
    tabMovies.push(movie.backPoster);
    return(
      <>
        <Card className="container-card col-md-2 col-sm-3" text="Evaluation : " key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} /> 
      </>
    )
  });

  return (
    <div>
      <Header firstImage={tabMovies[0]} secondImage={tabMovies[1]} thirdImage={tabMovies[5]} />

      <div className="movies-nowplaying">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title text-lg-start text-info">Films</h3>
            <Link to="/films/" className="movies-link btn btn-outline-info">Voir tout</Link>
          </div>
          {moviesPopularList}
        </div>
      </div>

      <div className="movies-toprated">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title text-lg-start text-info">Séries</h3>
            <Link to="/film/populaire" className="movies-link btn btn-outline-info">Voir tout</Link>
          </div>
          
        </div>
      </div>

      {/* <div className="movies-popular">
        <div className="container row">
          <div className="movies">
            <h3 className="movies-title text-info">Populaires</h3>
            <Link to="/film/populaire" className="movies-link bg-info">Voir tout</Link>
          </div>
          {moviesPopularList}
        </div>
      </div> */}
    </div>
  );
};
export default Home;
