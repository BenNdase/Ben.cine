import React, { useEffect, useState } from "react";
import "./Home.scss"
import { RecoverMovies } from "../../service/api";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";

const Home = () => {
  const [nowPLaying, setNowPlaying] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setNowPlaying(await RecoverMovies());
    };
    fetchApi();
  }, []);
  const tabMovies = [];
  const movies = nowPLaying.slice(7, 20).map((movie, index) => {
    tabMovies.push(movie.backPoster);
    return (
      <div key={index}>
        <div className="carousel-center">
          <img
            src={movie.backPoster}
            alt={movie.title}
          />
          <p>{movie.title}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Header firstSrc={tabMovies[0]} secondSrc={tabMovies[1]} thirdSrc={tabMovies[4]} />
    </div>
  );
};
export default Home;
