import axios from 'axios';
import { SEARCH_PLAYLISTS, FETCH_PLAYLISTS, FETCH_PLAYLIST_TRACKS, FETCH_PLAYLIST_RANDOM } from '../constants/actionTypes';
import { API_FEATURED_PLAYLIST, API_PLAYLIST, API_SEARCH_PLAYLIST } from '../constants/apiConstants';
import { getRandomPlaylist } from '../../utils/commonUtils'
//dev token
const token = "BQDstrvgYR_ZN-6K6Td-tVIJ01sTIqpWg0Z_DrRlZqAZy1GD3IBhI__NK83JnCWiDyCS1XehW9TguloI89KgYg";

// export const fetchToken = 

export const fetchPlaylists = () => async dispatch => {
   const res = await axios.get(`${API_FEATURED_PLAYLIST}?access_token=${token}`);
    
   dispatch({ type: FETCH_PLAYLISTS, payload: res.data });
 }; 

 export const fetchPlaylistTracks = playlistId => async dispatch => {
   const res = await axios.get(`${API_PLAYLIST}/${playlistId}?access_token=${token}`);
   dispatch({ type: FETCH_PLAYLIST_TRACKS, payload: res.data});
 };

 export const fetchPlaylistRandom = () => async dispatch => {
  const accessToken = await axios.get('/api/token');
  // console.log(accessToken.data)
  const res = await axios.get(`${API_FEATURED_PLAYLIST}?access_token=${accessToken.data}`);
  
  let playlist = getRandomPlaylist(res.data.playlists.items)
  // console.log(res.data)
  const tracks = await axios.get(`${API_PLAYLIST}/${playlist.id}?access_token=${accessToken.data}`);
  // console.log(tracks.data)
  
  dispatch({ type: FETCH_PLAYLIST_RANDOM, payload: tracks.data });
};

export const searchPlaylist = (keyword) => async dispatch => {
  const accessToken = await axios.get('/api/token');
  // console.log(accessToken.data)
  const res = await axios.get(`${API_SEARCH_PLAYLIST}/?q=${keyword}&type=playlist&access_token=${accessToken.data}`);
  
  let playlist = getRandomPlaylist(res.data.playlists.items)
  console.log(res.data)
  const tracks = await axios.get(`${API_PLAYLIST}/${playlist.id}?access_token=${accessToken.data}`);
  console.log(tracks.data)
  
  dispatch({ type: SEARCH_PLAYLISTS, payload: tracks.data });
}; 