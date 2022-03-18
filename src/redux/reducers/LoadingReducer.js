import { SET_LOADING,HIDE_LOADING } from "../actions/types/ListMoviesTypes"

const initialState = {
    isPlay : false
}

export const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {

    case SET_LOADING:
        state.isPlay = true;
        return { ...state}

    case HIDE_LOADING:
        state.isPlay = false;
        return { ...state}

    default:
        return state
    }
}
