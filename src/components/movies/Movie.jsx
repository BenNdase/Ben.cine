import "./Movie.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import {
  genreMoviesList,
  nowPlayingMovies,
  fetchMoviesByGenres,
} from "../../service/api";
import CardMovies from "../card/Card";

const Movie = () => {
  const [genreMovies, setGenreMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  useEffect(() => {
    const fetchMoviesListApi = async () => {
      setGenreMovies(await genreMoviesList);
      setNowPlaying(await nowPlayingMovies);
      setMoviesByGenre(await fetchMoviesByGenres());
    };
    fetchMoviesListApi();
  }, []);
  const moviesGenreList = genreMovies.map((movie, index) => {
    return (
      <li className="list-inline-item pb-1" key={index}>
        <button type="button" className="btn btn-outline-info text-white">
          {movie.name}
        </button>
      </li>
    );
  });
  const nowPlayingMovieList = nowPlaying.slice(8).map((movie, index) => {
    return (
      <div className="movies-background">
        <img src={movie.poster} alt={movie.title} key={index} />
      </div>
    );
  });
  const movieList = moviesByGenre.slice(0, 6).map((movie, index) => {
    return (
      <>
        <CardMovies
          key={index}
          id={movie.id}
          poster={movie.poster}
          title={movie.title}
          rating={movie.rating}
        />
      </>
    );
  });
  return (
    <div className="movies-popular">
      <Navbar />
      <div className="container-movies">{nowPlayingMovieList}</div>
      <div>
        <div>
          <div className="row mt-3 container list-movies">
            <div className="col">
              <ul className="list-inline">{moviesGenreList}</ul>
            </div>
          </div>
          <div className="container row">{movieList}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Movie;
