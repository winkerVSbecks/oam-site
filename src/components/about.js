import React, { Component } from 'react';
import Radium from 'radium';

function About({ toggleAbout, isVisible }) {
  const position = isVisible ? { transform: 'translate3d(0, 0, 0)' } :
                               { transform: 'translate3d(0, 100%, 0)' };

  const styles = Object.assign({}, { backgroundColor: '#00ffff' }, position);

  return (
    <div className={ `fixed left-0 top-0 right-0 bottom-0 white flex flex-center an-all` }
      style={ styles }>
      <div className="center px2 mx-auto">
        { oam }

        <p className="h2 not-sm-mb4">OAM is an experiment<br className="sm-show md-show lg-show" />in mixing sound, colours, and geometries<br className="sm-show md-show lg-show" />on the web.</p>
        <p className="h3 m0">Brought to you by <a className="link" href="http://ainsleywagoner.com/">Ainsley</a> &amp; <a className="link" href="http://varun.ca/">Varun</a></p>
      </div>

      <div className="absolute top-0 right-0 m2 pointer"
        onClick={ toggleAbout }>
        { closeButton }
      </div>

      <div className="absolute bottom-0 right-0 pointer">
        { githubLink }
      </div>
    </div>
  );
}

export default Radium(About);

const oam = (
  <svg viewBox="0 0 20 20"
    width="124px" height="124px"
    className="not-sm-mb3"
    fill="#fff">
    <circle cx="10" cy="10" r="10" opacity="0.5" />
    <rect x="0" y="0" width="20" height="20" opacity="0.5" />
    <path d="M 10,0 L 20,20 L 0,20 Z" opacity={ 0.5 } />
  </svg>
);

const githubLink = (
  <a className="m2 block"
    href={ 'https://github.com/winkerVSbecks/oam-site' }>
    <svg xmlns="http://www.w3.org/2000/svg"
      width="24" height="24"
      viewBox="0 0 24 24">
      <path fill="#fff"
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  </a>
);

const closeButton = (
  <svg viewBox="0 0 20 20"
    width="40px" height="40px">
    <path fill="#fff"
      d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
      c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
      c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
      c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z" />
  </svg>
);
