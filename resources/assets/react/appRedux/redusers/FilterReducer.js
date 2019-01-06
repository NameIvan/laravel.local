
const initialState = '';

export default function FilterReducer(state = initialState, action) {
    if (action.type === "FIND_TRACK") {
        return action.payload;
    }

    return initialState;
}