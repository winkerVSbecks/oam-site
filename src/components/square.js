import React, { Component } from 'react';
import * as R from 'ramda';
import { getStyles } from '../styles/square-styles';
import confused from '../assets/confused.mp3';
import bounceDownSynth from '../assets/bounce-down-synth.mp3';

const bounce = new Audio(bounceDownSynth);
const confuse = new Audio(confused);

/**
 * The Square
 */
export default class Square extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {

    const { fill, x, y, s, visible, mixBlendMode } = this.props;
    const styles = getStyles(visible, mixBlendMode, s);

    if (visible) {
      bounce.play();
    } else {
      confuse.play();
    }

    return (
      <g transform={ 'translate(' + x + ', ' + y + ')' }>
        <rect style={ styles }
          fill={ fill }
          x={ 0 }
          y={ 0 }
          width={ s }
          height={ s } />
      </g>
    );

  }

}
