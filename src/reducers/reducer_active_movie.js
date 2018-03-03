import {ACTIVE_MOVIE} from '../actions/index';

export default function ActiveMovieReducer(state = [], action) {

  switch (action.type) {
    case ACTIVE_MOVIE:
      return [action.payload.data];
      //Saves To State
      // return [ action.payload.data.results, ...state ];
  }
  return state;
}
