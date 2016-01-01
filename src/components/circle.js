import React from 'react';
import Radium from 'radium';
import getStyles from '../styles/circle-styles';

/**
 * The Circle
 */
const Circle = ({ fill, x, y, r, visible, mixBlendMode }) => {

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
