import { GET_TRACKS, GET_TRACKS_SUCCESS, GET_TRACKS_FAILURE, ADD_TRACK_SUCCESS, ADD_TRACK_FAILURE } from '../actions/tracks';


const initialState = {
    tracks: { list: [], error: {} }
};


export default function TrackReducer(state = initialState, action) {
    if (action.type === ADD_TRACK_SUCCESS) {
        return { tracks: { list: [...state.tracks.list, action.payload.data], error: [], loading: true }};
    } else if (action.type === ADD_TRACK_FAILURE) {
        return { ...state, tracks: { list: state.tracks.list, error: action.payload.data.errors, loading: false }}
    } else if (action.type === GET_TRACKS) {
        return { ...state, tracks: { list: [], error: [], loading: true }}
    } else if (action.type === GET_TRACKS_SUCCESS) {
        return { ...state, tracks: { list: action.payload.data, error: [], loading: false }}
    } else if (action.type === GET_TRACKS_FAILURE) {
        return { ...state, tracks: { list: [], error: action.payload.data.errors, loading: false }}
    }

    return state;
}