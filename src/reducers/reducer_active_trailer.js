import { ACTIVE_TRAILER } from '../actions/index';

export default function ActiveTrailerReducer(state = [], action) {

  switch (action.type) {
    case ACTIVE_TRAILER:
      return [ action.payload.data ];
      //Saves To State
      // return [ action.payload.data.results, ...state ];
  }
return state;
}
