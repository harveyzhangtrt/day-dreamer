import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylistRandom, searchPlaylist } from '../../core/playlists/playlistsActions';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import TrackList from '../components/TrackList/TrackList';


class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchPlaylistRandom();
        
    }

    render() {
        return (
            <section>
                <Header />
                <Banner fetchPlaylist={this.props.fetchPlaylistRandom}
                        searchPlaylist={this.props.searchPlaylist}/>
                <TrackList />
    
            </section>
        );
    }
};

const mapDispatchToProps = {
    fetchPlaylistRandom,
    searchPlaylist
  };

export default connect(null, mapDispatchToProps)(HomeContainer);