import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Header.css"; 

class Header extends Component {
    renderLogin() {
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return (
                    <ul className="">
                        <li  className="btn btn-info header-btn"><a href="/auth/spotify">Login with Spotify</a></li>
                    </ul>   
                );
            default:
                return (
                    <ul className="">
                        {/* <a>Hi, {this.props.auth.displayName}</a>  */}
                        <img className="avatar" src={this.props.auth.photos[0]} alt="avatar"/>
                        <a href="/auth/logout">Log out</a>
                    </ul>   

                );
        }
    }
    render() {
        return (
            <div className="container">
                <div className="navbar ">
                    <div className="brand">
                        <h5>MuseMusical</h5>
                    </div>
                    <div>
                    {this.renderLogin()}                     
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps({ auth }){
    return { auth };
}



export default connect(mapStateToProps, null)(Header);