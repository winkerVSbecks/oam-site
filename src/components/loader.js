import React, { Component, classSet } from 'react';
import ReactDOM from 'react-dom';
import { getStyles } from '../styles/loader-styles';
import Radium from 'radium';
import * as R from 'ramda';
import beaconOnMars from '../assets/beacon-on-mars.mp3';

const CP_MULTIPLIER = 0.512286623256592433;
const loadTone = new Audio(beaconOnMars);

/**
 * Loading Animation
 */
@Radium
export default class Loader extends Component {

  // AnimationEnd
  componentDidMount() {
    const svg = ReactDOM.findDOMNode(this);
    const path = svg.querySelector('path');

    const end = () => {
      this.props.toggleLoader();
      this.props.toggleTriangle();
      this.props.toggleSquare();
      this.props.toggleCircle();
    }
    loadTone.play();

    if (path) {
      path.addEventListener('animationend', end, false);
      path.addEventListener('mozAnimationEnd', end, false);
      path.addEventListener('webkitAnimationEnd', end, false);
      path.addEventListener('msAnimationEnd', end, false);
    }
  }

  render() {

    const { fill, stroke, w, h } = this.props;
    const d = buildWave(w, h, 24);
    const styles = getStyles();

    return (
      <svg version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={ w + 'px' }
        height={ h + 'px' }>
        <g>
          <rect x={ 0 } y={ 0 }
            width={ w } height={ h }
            fill={ fill }>
          </rect>
          <path style={ styles }
            stroke={ stroke }
            fill={ 'none' }
            strokeWidth={ 2 }
            strokeLinecap={ 'round' }
            d={ d }>
          </path>
        </g>
      </svg>
    );

  }

}

/**
 * Build the Wave
 * @param  {Number} w width
 * @param  {Number} h height
 * @param  {Number} p pitch
 * @return {String}   Path data
 */
function buildWave(w, h, p) {

  const a = p / 4;
  const y = h / 2;
  const x = (w - w * 0.25 - 11 * a) / 2;

  const start = [
    'M', x, y + a / 2,
    'L', x + w * 0.25, y + a / 2,
    'c', a * CP_MULTIPLIER, 0,
    -(1 - a) * CP_MULTIPLIER, -a,
    a, -a
  ];

  const wave = R.flatten(R.map((idx) => {

    const y = idx % 2 === 0 ? a : -a;

    return [...[
      's', -(1 - a) * CP_MULTIPLIER, y,
      a, y
    ]];

  }, R.range(0, 10)));

  const pathData = [...start, ...wave];

  return pathData.join(' ');

}
