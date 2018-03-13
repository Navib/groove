import { combineReducers } from 'redux';
import MoviesReducer from './reducer_movies';
import ActiveMovieReducer from './reducer_active_movie';
import ActiveTrailerReducer from './reducer_active_trailer';
import SimilarMoviesReducer from './reducer_similar_movies';
import NowPlayingReducer from './reducer_now_playing';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  activeMovie: ActiveMovieReducer,
  activeTrailer: ActiveTrailerReducer,
  similarMovies: SimilarMoviesReducer,
  nowPlaying: NowPlayingReducer,
});

export default rootReducer;
