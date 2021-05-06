import axios from "axios";

const apiKey = "8e75444d164c6753a09db0ea4696aae7";
const apiUrl = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${apiUrl}/movie/now_playing`;
const toprateUrl = `${apiUrl}/top_rated`;
const movieUrl = `${apiUrl}/movie`;
const genreUrl = `${apiUrl}/genre/movie/list`;
const discoverMoviesUrl = `${apiUrl}/discover/movie`;
const personUrl = `${apiUrl}/trending/person/week`;

export const RecoverMovies = async () => {
    try {
        const {data} = await axios.get(nowPlayingUrl, {
            params:{
                api_key:apiKey,
                language:'en_US',
                page:1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/w1280/'
        const modifiedData = data['results'].map((resultData) => ({
            id: resultData['id'],
            backPoster: posterUrl + resultData['backdrop_path'],
            popularity: resultData['popularith'],
            title: resultData['title'],
            poster: posterUrl + resultData['poster_path'],
            overview: resultData['overview'],
            rating: resultData['vote_average']
        }))
        console.log(modifiedData);
        return modifiedData;
        
    } catch (error) {
        console.log(error)
    }
}
export const RecoverGenre = () => {

}
export const RecoverMoviesByGenre = () => {

}
export const RecoverPersons = () => {
    
}
export const RecoverTopratedMovies = () => {

}
export const RecoverMoviesDetails = () => {
    
}
export const RecoverMoviesVideos = () => {

}
export const RecoverSimilarMovies = () => {
    
}
export const RecoverCasts = () => {
    
}