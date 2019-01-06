import { combineReducers } from 'redux';
import { routerReducer} from "react-router-redux";
import TrackReducer from './TrackReducer';
import PlayListReducer from './PlayListReducer';
import FilterReducer from './FilterReducer';

const rootReducer = combineReducers({
    tracks: TrackReducer,
    routing: routerReducer,
    playLists: PlayListReducer,
    filter: FilterReducer
});

export default rootReducer;