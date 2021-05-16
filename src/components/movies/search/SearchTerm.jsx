import { useState , useEffect} from "react";
import { useLocation } from "react-router-dom";
import { fetchQueryMovieSearch, nowPlayingMovies, posterUrl } from "../../../service/api";
import CardMovies from "../../card/Card";

const SearchTerm = (props) => {
    const [resultSearch, setResultSearch] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const location = useLocation();
    const path = location.pathname.split("/");
    const term = path[2];
    const imageUrl = posterUrl;

    useEffect(() => {
        const fetchApi = async () => {
            setResultSearch(await fetchQueryMovieSearch(term));
            setNowPlaying(await nowPlayingMovies);
        }
        fetchApi();
        window.scroll(0,0);
    }, [term]);
    console.log(resultSearch);
    const resultSearchList = resultSearch.map((movie,index) => {
        return(
            <>
                {movie.poster === `${imageUrl}null` ? null : <CardMovies className="container-card col-md-2 col-sm-3" text="Evaluation : " key={index} id={movie.id} poster={movie.poster} title={movie.title} rating={movie.rating} />  }
            </>
        )
    });
    const nowPlayingMovieList = nowPlaying.slice(3,4).map((movie, index) => {
        return (
          <div className="movies-background">
            <img src={movie.backPoster} alt={movie.title} key={index} />
          </div>
        );
      });
    return(
        <div className="movies-popular">
            <div className="container-movies">{nowPlayingMovieList}</div>
            <div className="container row">
                <h3 className="text-info">Resultat : {term} , {resultSearch.length <= 1 ? <span>{resultSearch.length} Film</span> : <span>{resultSearch.length} Films</span>}</h3>
                <p className="container row">{resultSearchList}</p>
            </div>
        </div>
    )
}
export default SearchTerm;