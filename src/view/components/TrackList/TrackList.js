import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import './TrackList.css';

import PlayerCard from '../PlayerCard/PlayerCard';

class TrackList extends Component {


    
    renderTrackListItem() {
        if (this.props.playlistRandom.tracks.items) {
            return this.props.playlistRandom.tracks.items
                .filter(({track}) => track.preview_url)
                .map(({track}) => {  
                    return (
                        <CSSTransitionGroup
                        transitionName="tracklist"
                        transitionAppear={true}
                        transitionAppearTimeout={1000}
                        transitionEnter={false}
                        transitionLeave={false}
                        style={{margin:'auto'}}
                        key={track.id} >
                        
                            <PlayerCard 
                                        key={track.name} 
                                        id={track.id} 
                                        name={track.name} 
                                        cover={track.album.images[1].url}
                                        source={track.preview_url}
                                        duration={30}
                                        {...track}                            
                                    />
                        </CSSTransitionGroup>
                    )
            });
      }
    }

    
    render() {
        return(
                <div key="musiclist" className="music-list">
                    <div key="row" className="row music-list__row">
                        {this.renderTrackListItem()}
                    </div>
                </div>            

        );
    }
}

function mapStateToProps({ playlistRandom }) {
    return { playlistRandom };
  };




export default connect(mapStateToProps, null)(TrackList);