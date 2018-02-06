import { FETCH_PLAYLIST_RANDOM, SEARCH_PLAYLISTS } from '../constants/actionTypes';

const initialState = {
    id: "",
    image: "",
    name: "",
    tracks: [],
};
let playlist = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_PLAYLIST_RANDOM:
            playlist = action.payload;
            return { id: playlist.id, image: playlist.images[0].url, name: playlist.name, tracks: playlist.tracks };
        case SEARCH_PLAYLISTS:
            playlist = action.payload;
            return { id: playlist.id, image: playlist.images[0].url, name: playlist.name, tracks: playlist.tracks };
        default:
            return state;
    }
}