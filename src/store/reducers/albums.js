import { ACTION_GET_ALBUMS, ACTION_GET_PHOTOS } from '../actions/albums';

const initialState = {
    albums: [],
    photos: []
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_GET_ALBUMS:
            return { ...state, albums: payload };
        case ACTION_GET_PHOTOS:
            return { ...state, photos: payload };
        default:
            return state;
    }
}