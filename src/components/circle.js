import React, { Component } from 'react';
import classNames from 'classNames';
import * as R from 'ramda';
import Radium from 'radium';
import { getStyles } from '../styles/circle-styles';
import trampolineBounce from '../assets/trampoline-bounce.mp3';
import quickReverse from '../assets/quick-reverse.mp3';

const bounce = new Audio(trampolineBounce);
const reverse = new Audio(quickReverse);

/**
 * The Circle
 */
@Radium
export default class Circle extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {

    const { fill, x, y, r, visible, mixBlendMode } = this.props;

    if (visible) {
      bounce.play();
    } else {
      reverse.play();
    }

    const styles = getStyles(visible, mixBlendMode);

    return (
      <g transform={ 'translate(' + x + ', ' + y + ')' }>
        <circle style={ styles }
          fill={ fill }
          opacity={ 0.5 }
          cx={ 0 }
          cy={ 0 }
          r={ r }>
        </circle>
      </g>
    );

  }

}
