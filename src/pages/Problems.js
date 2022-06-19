import React from "react";
import {useHistory} from 'react-router-dom';

import '../style.css';

const Problems = () => {
  const history = useHistory();

  const handleRedirect = (url) => () => {
    if(url) {
      history.push(url);
    }
  }

  return(
    <>
      <header>
        <div className="navbar">
          <div className="container-header nav-container">
            <h1 className="navbar-title">Urban blog</h1>
            <div className="navbar-links">
              <div className="navbar-links-pages">
                <button onClick={handleRedirect('/')} className="link">Home</button>
                <button onClick={handleRedirect('/ideas')} className="link">Ideas</button>
                <button className="link">Problems</button>
              </div>
              <div>
                <button className="link" onClick={handleRedirect('/signin')}>Sign in</button>
                <button onClick={handleRedirect('/signup')} className="link link-sign-up">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </header> 
      <main>
        <div className="main-container">
            <h1 className="main-hello problems-title">Discussion forums will be coming soon...</h1>
            <h1 className="main-hello problems-text">Be patient.</h1>
        </div>
      </main>
    </>
  )
};

export default Problems;