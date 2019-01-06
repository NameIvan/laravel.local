import { CALL_API } from 'redux-api-middleware';

export const GET_TRACKS = 'GET_TRACKS';
export const GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS';
export const GET_TRACKS_FAILURE = 'GET_TRACKS_FAILURE';

export const ADD_TRACK = 'ADD_TRACK';
export const ADD_TRACK_SUCCESS = 'ADD_TRACK_SUCCESS';
export const ADD_TRACK_FAILURE = 'ADD_TRACK_FAILURE';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
};

export const getTracks = () => ({
    [CALL_API]: {
        types: [
            GET_TRACKS,
            {
                type: GET_TRACKS_SUCCESS,
                payload: (action, state, res) => {
                    return res.json().then(json => {
                        return {
                            data: json
                        };
                    });
                }
            },
            {
                type: GET_TRACKS_FAILURE,
                payload: (action, state, res) => {
                    return res.json().then(json => {
                        return {
                            data: json
                        };
                    });
                }
            }
        ],
        endpoint: '/track',
        headers: headers,
        method: 'GET',
        credentials: 'include'
    }
});


export const addTrack = data => ({
    [CALL_API]: {
        types: [
            ADD_TRACK,
            {
                type: ADD_TRACK_SUCCESS,
                payload: (action, state, res) => {
                    return res.json().then(json => {
                        return {
                            data: json
                        };
                    });
                }
            },
            {
                type: ADD_TRACK_FAILURE,
                payload: (action, state, res) => {
                    return res.json().then(json => {
                        return {
                            data: json
                        };
                    });
                }
            }
        ],
        endpoint: '/track/store',
        headers: headers,
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include'
    }
});