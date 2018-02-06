import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './Banner.css';


class Banner extends Component {
    state = { keyword: ''}
    changeText = (e) => {
        this.setState({
            keyword: e.target.value,
        })
    }
    onSearch = (e) => {
        e.preventDefault();
        this.props.searchPlaylist(this.state.keyword)
    }
    render() {
        return(
            <CSSTransitionGroup
                        transitionName="banner"
                        transitionAppear={true}
                        transitionAppearTimeout={1000}
                        transitionEnter={false}
                        transitionLeave={false}
                        style={{margin:'auto'}}>

                <div className="banner">
                    <div className="banner-content">
                        <h1>Day Dreamer</h1>
                        <div className="row">
                            <div className="col">
                            <button onClick={this.props.fetchPlaylist} className="btn btn-primary banner-btn" >
                                Random
                            </button>
                            </div>     
                        </div>     
                        <div className="row">
                            <div className="col-sm-6 offset-sm-3">
                            <form className="form-group row" onSubmit={this.onSearch}>
                                
                                <input onChange={this.changeText} value={this.state.keyword} className="form-control search " type="text" autoComplete="off"  placeholder="What's your mood?" />
                                {/* <button className="btn btn-primary banner-btn" >Search</button> */}
                            </form>
                            </div>
                        </div>                                        
                    </div>
                </div>
            </CSSTransitionGroup>

        );
    }
}

export default Banner;