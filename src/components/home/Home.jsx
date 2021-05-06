import React, { useEffect, useState } from "react";
import "./Home.scss"
import { RecoverMovies } from "../../service/api";

const Home = () => {
  const [nowPLaying, setNowPlaying] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setNowPlaying(await RecoverMovies());
    };
    fetchApi();
  }, []);
  const tabMovies = [];
  const movies = nowPLaying.slice(0, 5).map((movie, index) => {
    tabMovies.push(movie.backPoster);
    return (
      <div key={index}>
        <div className="carousel-center">
          <img
            src={movie.backPoster}
            alt={movie.title}
            style={{ height: 600 }}
          />
          <p>{movie.title}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div id="carousel_1" className="carousel slide w-100" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#carousel_1" data-slide-to="0" class="active"></li>
          <li data-target="#carousel_1" data-slide-to="1"></li>
          <li data-target="#carousel_1" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={tabMovies[0]} alt="" />
          </div>
          <div className="carousel-item">
            <img src={tabMovies[1]} alt="Chicago" />
          </div>
          <div className="carousel-item">
            <img src={tabMovies[2]} alt="Chicago" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel_1"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel_1"
          data-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};
export default Home;
