import React from "react";
import {useHistory} from 'react-router-dom';

import '../style.css';

const Ideas = () => {
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
                <button className="link">Ideas</button>
                <button onClick={handleRedirect('/problems')} className="link">Problems</button>
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
            <div className="card-block">
                <div className="card-image"></div>
                <p className="card-title">Broken windows theory</p>
                <p className="card-text">In 1982, James Wilson and George Kelling formulated a theory according to which if someone broke the glass in a house and no one inserted a new one, then soon not a single whole window would remain in that hous...</p>
                <button className="link link-sign-up read-more" onClick={handleRedirect('/readmore')}>Read more...</button>
            </div>
        </div>
      </main>
    </>
  )
};

export default Ideas;