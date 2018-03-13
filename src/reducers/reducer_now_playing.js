import { FETCH_NOW_PLAYING }  from '../actions/index';

export default function NowPlayingReducer(state = [], action) {

  switch(action.type) {
    case FETCH_NOW_PLAYING:
    console.log("now playing reducer: ", action);
    return [action.payload.data.results, ...state ];
  }
  return state;
}
