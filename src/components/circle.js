import React from 'react';
import Radium from 'radium';
import getStyles from '../styles/circle-styles';
import trampolineBounce from '../assets/trampoline-bounce.mp3';
import quickReverse from '../assets/trampoline-bounce-reverse.mp3';

const bounce = new Audio(trampolineBounce);
const reverse = new Audio(quickReverse);
reverse.playbackRate = 3;

/**
 * The Circle
 */
const Circle = ({ fill, x, y, r, visible, mixBlendMode }) => {

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

};


export default Radium(Circle);
