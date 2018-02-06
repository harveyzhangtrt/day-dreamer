import { FETCH_PLAYLIST_TRACKS } from '../constants/actionTypes';

const initialState = {
    href: "",
    tracks: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_PLAYLIST_TRACKS:
            return { tracks: action.payload.tracks.items, href: action.payload.href };
        default:
            return state;
    }
}