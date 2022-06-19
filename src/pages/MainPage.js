import React from "react";
import {useHistory} from 'react-router-dom';

import '../style.css';

const MainPage = () => {
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
                <button className="link">Home</button>
                <button onClick={handleRedirect('/ideas')} className="link">Ideas</button>
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
          <div className="main-title">
            <div className="logo-line">
              <h1 className="main-hello">Hello, seeker</h1>
              <div className="main-logo"></div>
            </div>
            <p className="main-title-text">This is a place where everyone can get to know better the modern world of urban planning.</p>
            <div className="main-blocks">
              <div className="main-block">
                <h1 className="main-hello">Break old views</h1>
                <p className="main-text">In the <button className="link-button main-link-button" onClick={handleRedirect('/ideas')}>Ideas </button>
                 section you will find useful articles. There are good examples of public spaces, articles on contemporary problems and solutions offered by leading experts around the world.</p>
              </div>
              <div className="main-block">
                <h1 className="main-hello">Find new ways</h1>
                <p className="main-text">In the <button className="link-button main-link-button" onClick={handleRedirect('/problems')}>Problems </button>
                 section, you can offer a discussion of the problems that exist in your city or join already launched topics, where people from all over the world offer solutions and help find the best way out in situations of various levels of complexity.              
                 </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
};

export default MainPage;