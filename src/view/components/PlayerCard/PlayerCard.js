import React, { Component } from 'react';
import './PlayerCard.css';

class Player extends Component {
	constructor(props){
		super(props);

		this.state = { playStatus: 'play', hover: false, currentTime: 0, scrubberWidth: {width: 0}};
	};

	updateTime(timestamp) {
		timestamp = Math.floor(timestamp);
		this.setState({ currentTime: timestamp });
	}
	updateScrubber(percent) {
		this.setState({ scrubberWidth: {width: percent} });		
	}
	togglePlay = () => {
		let status = this.state.playStatus;
		let audio = document.getElementById(this.props.id);
		if(status === 'play') {
			status = 'pause';
			audio.play();
			let that = this;
			setInterval(function() {
				let currentTime = audio.currentTime;
				let duration = that.props.duration;
				
				// Calculate percent of song
				let percent = (currentTime / duration) * 100 + '%';
				that.updateScrubber(percent);
				that.updateTime(currentTime);
			}, 100);
		} else {
			status = 'play';
			audio.pause();
		}

		this.setState({ playStatus: status });
		
	}

	playerHover = () => {
		this.setState ({
			hover: true
		})
	}
	
	hoverLeave = () => {
		this.setState ({
			hover: false
		})
	}

	convertTime(timestamp) {
		let minutes = Math.floor(timestamp / 60);
		let seconds = timestamp - (minutes * 60);
		if(seconds < 10) {
			seconds = '0' + seconds;
		}
		timestamp = minutes + ':' + seconds;
		return timestamp;
	}

	render() {
		// console.log(this.props)
		return(
			<div className="col">
				<div className="player" onMouseEnter={this.playerHover} onMouseLeave={this.hoverLeave}>
					<div className="background" style={{'backgroundImage': 'url(' + this.props.cover + ')'}}></div>
					<div className="artwork" style={{'backgroundImage': 'url(' + this.props.cover + ')'}}>
						{ (this.state.playStatus === 'pause' || this.state.hover) 
							? <Controls isPlaying={this.state.playStatus} onClick={this.togglePlay} /> 
							: null }						
					</div>
					
					<div className="track-info">
						<div className="name"  >{this.props.name}</div>
						<div className="artist" >{this.props.artists[0].name}</div>
						<div className="album" >{this.props.album.name}</div>
					</div>

					<div className="scrubber">
						<div className="scrubber-progress" style={this.state.scrubberWidth}></div>
					</div>

					{/* <Controls isPlaying={this.state.playStatus} onClick={this.togglePlay} /> */}
					{/* <div className="timestamps">
						<div className="time time--current">{this.convertTime(this.state.currentTime)}</div>
						<div className="time time--total">{this.convertTime(this.props.duration)}</div>
					</div> */}

					<audio loop id={this.props.id}><source src={this.props.source} /></audio>
				</div>
			</div>
		);
	}
};


class Controls extends Component {
	render() {
		let classNames;
		if (this.props.isPlaying === 'pause') {
			classNames = 'fa fa-fw fa-pause';
		} else {
			classNames = 'fa fa-fw fa-play';
		}

		return (
			<div className="controls">
				<div onClick={this.props.onClick} className="button">
					<i className={classNames}></i>
				</div>
			</div>
		)
	}
};

export default Player;