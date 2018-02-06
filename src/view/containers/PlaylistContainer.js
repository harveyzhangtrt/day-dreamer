import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylistTracks } from '../../core/playlists/playlistsActions';
import Playlist from '../components/Playlist/Playlist';
class PlaylistContainer extends Component {
    componentDidMount() {
        this.props.fetchPlaylistTracks(this.props.match.params.playlistId)
    }
    renderTracks() {

    }
    render() {
        return(
            <div>
                <h1>PlaylistContainer</h1>
                <Playlist tracks={this.props.playlistTracks.tracks} />
            </div>
        );
    }
};

function mapStateToProps({ playlistTracks }) {
    return { playlistTracks };
  };

  const mapDispatchToProps = {
    fetchPlaylistTracks
  };

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);