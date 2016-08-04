import React, { Component } from 'react';

const styles = {
  container: {
    backgroundColor: '#00ffff',
  },
}

function About({ toggleAbout, isVisible }) {
  const position = isVisible ? 'top-0' : 'top-100';
  const visibility = isVisible ? '' : 'hide';

  return (
    <div className={ `fixed ${position} left-0 vh-100 vw-100 white flex flex-center an-all` }
      style={ styles.container }>
      <div className="center px2 mx-auto">
        <svg viewBox="0 0 20 20"
          width="124px" height="124px"
          className="mb3"
          fill="#fff">
          <circle cx="10" cy="10" r="10" opacity="0.5" />
          <rect x="0" y="0" width="20" height="20" opacity="0.5" />
          <path d="M 10,0 L 20,20 L 0,20 Z" opacity={ 0.5 } />
        </svg>

        <p className="h2 mb4">OAM is an experiment<br className="sm-show md-show lg-show" />in mixing sound, colours, and geometries<br className="sm-show md-show lg-show" />on the web.</p>
        <p className="h3">Brought to you by <a className="link" href="http://ainsleywagoner.com/">Ainsley</a> &amp; <a className="link" href="http://varun.ca/">Varun</a></p>
      </div>

      <div className="absolute top-0 right-0 m2 pointer"
        onClick={ toggleAbout }>
        <svg viewBox="0 0 20 20"
          width="40px" height="40px">
          <path fill="#fff"
            d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
            c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
            c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
            c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z" />
        </svg>
      </div>
    </div>
  );
}

export default About;
