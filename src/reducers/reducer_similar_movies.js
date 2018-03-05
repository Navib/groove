import { FETCH_SIMILAR_MOVIES } from '../actions/index';

export default function SimilarMoviesReducer(state = [], action) {

  switch (action.type) {
    case FETCH_SIMILAR_MOVIES:
      return [ action.payload.data.results];
      //Saves To State
      // return [ action.payload.data.results, ...state ];
  }
return state;
}
