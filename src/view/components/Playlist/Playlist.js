import React,{ Component } from 'react';
// import Player from '../Player/Player';

class Playlist extends Component {
    renderTracks() {
        return this.props.tracks.map(({track}) => {    
            return (
                <li className="collection-item avatar" key={track.id}>
                    <img src={track.album.images[2].url} alt="cover img" className="circle" />
                    <span className="title">{track.name}</span>
                    <p>{track.artists[0].name}</p> 
                    <p>{track.album.name}</p>                   
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            );
                
                
            
        });
    }

    render() {
        return(
            <div>
                <h1>tracks</h1>
                {console.log(this.props.tracks)}
                {/* <Player /> */}
                <ul className="collection">
                    {this.renderTracks()}
                </ul>
            </div>
        );
    }
};

export default Playlist;