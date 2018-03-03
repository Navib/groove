import { combineReducers } from 'redux';
import MoviesReducer from './reducer_movies';
import ActiveMovieReducer from './reducer_active_movie';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  activeMovie: ActiveMovieReducer,
});

export default rootReducer;
