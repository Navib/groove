import axios from 'axios';

const API_KEY = '3729ffa22dfa780e9abb43dee3074695';
const ROOT_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`;

export const FETCH_MOVIES = 'FETCH_MOVIES';

export function fetchMovies(movie) {
  console.log("movie: ", movie);
  const url = `${ROOT_URL}&query=${movie}`;
  const request =  axios.get(url)
                    .then(response => {
                        console.log(response);
                        return response;
                    })
                    .catch( error => {
                      console.log(error);
                      return error;
                    });


console.log("request: ", request);

  return {
    type: FETCH_MOVIES,
    payload: request
  }
}
