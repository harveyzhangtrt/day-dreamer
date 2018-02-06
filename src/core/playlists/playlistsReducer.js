import { FETCH_PLAYLISTS } from '../constants/actionTypes';

const initialState = {
    href: "",
    items: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_PLAYLISTS:
            return { items: action.payload.playlists.items, href: action.payload.playlists.href };
        default:
            return state;
    }
}