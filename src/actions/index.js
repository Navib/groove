import axios from 'axios';

const API_KEY = '3729ffa22dfa780e9abb43dee3074695';
const ROOT_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`;
const ACTIVE_API_KEY = `?api_key=${API_KEY}&language=en-US`;
const ROOT_ACTIVE_URL = `https://api.themoviedb.org/3/movie/`;

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const ACTIVE_MOVIE = 'ACTIVE_MOVIE';
export const ACTIVE_TRAILER = 'ACTIVE_TRAILER';
export const FETCH_SIMILAR_MOVIES = 'FETCH_SIMILAR_MOVIES';

export function fetchMovies(movie) {
  const url = `${ROOT_URL}&query=${movie}`;
  const request = axios.get(url).then(response => {
    //console.log(response);
    return response;
  }).catch(error => {
    console.log(error);
    return error;
  });

  return {
    type: FETCH_MOVIES,
    payload: request
  }
}

export function activeMovie(movie) {
  const url = `${ROOT_ACTIVE_URL}${movie}${ACTIVE_API_KEY}`;
  const request = axios.get(url).then(response => {
    //console.log(response);
    return response;
  }).catch(error => {
  //  console.log(error);
    return error;
  });

  return {
    type: ACTIVE_MOVIE,
    payload: request
  }
}

export function activeTrailer(movie) {
  const url = `${ROOT_ACTIVE_URL}${movie}/videos${ACTIVE_API_KEY}`;
  const request = axios.get(url).then(response => {
    //console.log("trailer: ",response);
    return response;
  }).catch(error => {
  //  console.log(error);
    return error;
  });

  return {
    type: ACTIVE_TRAILER,
    payload: request
  }
}

export function fetchSimilarMovies(movie) {
  const url = `${ROOT_ACTIVE_URL}${movie}/similar${ACTIVE_API_KEY}`;
  const request = axios.get(url).then(response => {
    //console.log("similar: ",response);
    return response;
  }).catch(error => {
  //  console.log(error);
    return error;
  });

  return {
    type: FETCH_SIMILAR_MOVIES,
    payload: request
  }
}
