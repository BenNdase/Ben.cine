import axios from "axios";

const apiKey = "8e75444d164c6753a09db0ea4696aae7";
const apiUrl = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${apiUrl}/movie/now_playing`;
const topratedMoviesUrl = `${apiUrl}/movie/top_rated`;
const popularMoviesUrl = `${apiUrl}/movie/popular`;
const movieUrl = `${apiUrl}/movie`;
const movieCategoryUrl = `${apiUrl}/genre/movie/list`;
const discoverMoviesUrl = `${apiUrl}/movie/discover`;
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
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((resultData) => ({
            id: resultData['id'],
            backPoster: posterUrl + resultData['backdrop_path'],
            popularity: resultData['popularith'],
            title: resultData['title'],
            poster: posterUrl + resultData['poster_path'],
            overview: resultData['overview'],
            rating: resultData['vote_average']
        }))
        console.log("Les films",modifiedData);
        return modifiedData;
        
    } catch (error) {
        console.log(error)
    }
}
export const RecoverMovieCategoryUrl = async () => {
    // try {
    //     const {data} = await axios.get(movieCategoryUrl, {
    //         params:{
    //             api_key:apiKey,
    //             language:'en_US',
    //             page:1
    //         }
    //     })
    //     const modifiedData = data['genres'].map((genre) => ({
    //         id:genre['id'],
    //         name:genre['name']
    //     }))
    //     return modifiedData;
    // } catch (error) {}
}
export const RecoverMoviesByCategory = async (category_id) => {
    // try {
    //     const {data} = await axios.get(movieUrl, {
    //         params:{
    //             api_key:apiKey,
    //             language:'en_US',
    //             page:1,
    //             with_genre:category_id
    //         }
    //     })
    //     const posterUrl = 'https://image.tmdb.org/t/p/w1280/'
    //     const modifiedData = data['results'].map((resultData) => ({
    //         id: resultData['id'],
    //         backPoster: posterUrl + resultData['backdrop_path'],
    //         popularity: resultData['popularith'],
    //         title: resultData['title'],
    //         poster: posterUrl + resultData['poster_path'],
    //         overview: resultData['overview'],
    //         rating: resultData['vote_average']
    //     }))
    //     console.log("Les catégories",modifiedData);
    //     console.log(modifiedData);
    //     return modifiedData;
    // } catch (error) {
        
    // }
}
export const RecoverPersons = () => {
    
}
export const RecoverTopratedMovies = async () => {
    try {
        const {data} = await axios.get(topratedMoviesUrl, {
            params:{
                api_key:apiKey,
                language:'en_US',
                page:1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((resultData) => ({
            id: resultData['id'],
            backPoster: posterUrl + resultData['backdrop_path'],
            popularity: resultData['popularith'],
            title: resultData['title'],
            poster: posterUrl + resultData['poster_path'],
            overview: resultData['overview'],
            rating: resultData['vote_average']
        }))
        console.log("Les films au",modifiedData);
        return modifiedData;
    } catch (error) {
        
    }
}
export const RecoverPopularMovies = async () => {
    try {
        const {data} = await axios.get(popularMoviesUrl, {
            params:{
                api_key:apiKey,
                language:'en_US',
                page:1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((resultData) => ({
            id: resultData['id'],
            backPoster: posterUrl + resultData['backdrop_path'],
            popularity: resultData['popularith'],
            title: resultData['title'],
            poster: posterUrl + resultData['poster_path'],
            overview: resultData['overview'],
            rating: resultData['vote_average']
        }))
        console.log("Les films au",modifiedData);
        return modifiedData;
    } catch (error) {
        
    }
}
export const RecoverDiscoverMovies = async () => {
    try {
        const {data} = await axios.get(discoverMoviesUrl, {
            params:{
                api_key:apiKey,
                language:'en_US',
                page:1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((resultData) => ({
            id: resultData['id'],
            backPoster: posterUrl + resultData['backdrop_path'],
            popularity: resultData['popularith'],
            title: resultData['title'],
            poster: posterUrl + resultData['poster_path'],
            overview: resultData['overview'],
            rating: resultData['vote_average']
        }))
        console.log("Les films au",modifiedData);
        return modifiedData;
    } catch (error) {
        
    }
}
export const RecoverMoviesDetails = () => {
    
}
export const RecoverMoviesVideos = () => {

}
export const RecoverSimilarMovies = () => {
    
}
export const RecoverCasts = () => {
    
}