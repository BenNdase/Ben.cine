import "./Movie.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import { genreMoviesList,nowPlayingMovies,fetchMoviesByGenres} from "../../service/api";
import CardMovies from "../card/Card";

const Movie = () => {
  const [genreMovies, setGenreMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setGenreMovies(await genreMoviesList);
      setNowPlaying(await nowPlayingMovies);
      setMoviesByGenre(await fetchMoviesByGenres());
    };
    fetchApi();
  }, []);

  const handleGenreClick = async (genre_id) => {
      setMoviesByGenre(await fetchMoviesByGenres(genre_id));
  }

  const moviesGenreList = genreMovies.map((movie, index) => {
    return (
      <li className="list-inline-item pb-1" key={index}>
        <button type="button" className="btn btn-outline-info text-white" onClick={(() => {
            handleGenreClick(movie.id)
        })}>
          {movie.name}
        </button>
      </li>
    );
  });
  const nowPlayingMovieList = nowPlaying.slice(14,15).map((movie, index) => {
    return (
      <div className="movies-background">
        <img src={movie.backPoster} alt={movie.title} key={index} />
      </div>
    );
  });
  const movieList = moviesByGenre.map((movie, index) => {
    return (
      <>
        <CardMovies
          className="container-card col-md-2 col-sm-3"
          text="Evaluation : "
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
