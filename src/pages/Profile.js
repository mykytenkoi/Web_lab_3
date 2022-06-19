import React from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import '../style.css';

export default class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }

    this.handleRedirect = this.handleRedirect.bind(this);
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data[0];
        this.setState({ persons });
      })
  }

  handleRedirect = (url) => () => {
    if(url) {
      useHistory.push(url);
    }
  }
  render () {
  return(
    <>
    <header>
        <div className="navbar">
          <div className="container-header nav-container">
            <h1 className="navbar-title">Urban blog</h1>
            <div className="navbar-links">
              <div className="navbar-links-pages">
                <button className="link" onClick={this.handleRedirect('/')}>Home</button>
                <button onClick={this.handleRedirect('/ideas')} className="link">Ideas</button>
                <button onClick={this.handleRedirect('/problems')} className="link">Problems</button>
              </div>
              <div>
                <p className="link">@{this.state.persons.name}</p>
              </div>
            </div>
          </div>
        </div>
      </header> 
      <main>
        <div className="main-container">
          <div className="profile-block">
            <div className="profile-card">
              <div className="profile-photo"></div>
              <p className="navbar-title">@{this.state.persons.name}</p>
            </div>
            <div className="about-block">
              <p className="navbar-title">About me</p>
              <p>{this.state.persons.username}</p>
              <p>{this.state.persons.email}</p>
              <p>{this.state.persons.phone}</p>
              <p>{this.state.persons.website}</p>
              <button onClick={this.handleRedirect('/signin')} className="input-sign sign-button">Log out</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )}
}
