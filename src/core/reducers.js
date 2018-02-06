import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth/authReducer';
import playlists from './playlists/playlistsReducer';
import playlistTracks from './playlists/playlistTracksReducer';
import playlistRandom from './playlists/playlistRandom';

export default combineReducers({
    auth,
    form,
    playlists,
    playlistTracks,
    playlistRandom
});