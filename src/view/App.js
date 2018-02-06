import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// import LandingContainer from './containers/LandingContainer';
import HomeContainer from './containers/HomeContainer';
import PlaylistContainer from './containers/PlaylistContainer'; 

import { fetchUser } from '../core/auth/authActions';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container-fluid">

              <Route exact path="/" component={HomeContainer} />
              <Route path="/playlist/:playlistId" component={PlaylistContainer} />
          </div>
          </BrowserRouter>
        
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUser
}
export default connect(null, mapDispatchToProps)(App);

