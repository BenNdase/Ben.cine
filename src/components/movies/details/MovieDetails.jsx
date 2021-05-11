import React ,{useState, useEffect} from "react";
import {movieDetailsList} from "../../../service/api";
import Navbar from "../../navbar/Navbar";
import CardMovies from "../../card/Card";
import {posterUrl} from "../../../service/api";
import "./MovieDetails.scss";

const MovieDetails = ({match}) => {
    let paramsMovieDetails = match.params;
    const [detail, setDetail] = useState([]);
    const imageUrl = posterUrl;
    
    useEffect(() => {
        const fetchApi = async () => {
            setDetail(await movieDetailsList(paramsMovieDetails.id))
        }
        fetchApi();
    }, [paramsMovieDetails.id]);

    let genres = detail.genres;
    let productionCompagnies = detail.production_companies;

    let genresList;
    let productionCompagniesList;

    if(genres) {
        genresList = genres.map((movie,index) => {
            return(
                <span className="text-white pl-1" key={index}>
                    {index ? <span>, </span> : null}{movie.name}
                </span>
            )
        })
    }
    if(productionCompagnies) {
        productionCompagniesList = productionCompagnies.map((movie,index) => {
            return(
                <>
                    {movie.logo_path != null ? <span key={index}><CardMovies className="container-card col-md-2 col-sm-3" id={detail.id} poster={`${imageUrl}${movie.logo_path}`}/></span>: null}
                </>
            )
        })
    }
    return(
        <div>
            <Navbar />
            <div className="detail-background carousel">
                <img src={`${imageUrl}${detail.backdrop_path}`} alt={detail.title} className="w-100"/>
            </div>
            <div className="movie-details">
                <div className="movies-description">
                    <CardMovies
                        className="container-card col-md-3 col-sm-3"
                        id={detail.id}
                        poster={`${imageUrl}${detail.poster_path}`}
                    />
                    <div className="movie-description col-md-8 inline-block">
                        <h2 className="text-info">{detail.title}</h2>
                        <p className="text-white">{detail.overview}</p>
                        <p className="text-white">Genre : <span className="description-genre">{genres && genresList}</span> </p>
                        <p className="text-white">Date de sortie : {detail.release_date}</p>
                        <p className="text-white">Nombres de vues : {detail.popularity}</p>
                        <p className="text-white">Evaluation : {detail.vote_average} ({detail.vote_average * 10}%)</p>
                    </div>
                </div>
                <div className="container row">
                    {productionCompagnies && productionCompagniesList}
                </div>
            </div>
        </div>
    )
}
export default MovieDetails;