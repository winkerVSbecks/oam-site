import React from 'react';
import Radium from 'radium';
import getStyles from '../styles/circle-styles';

/**
 * The Circle
 */
const Circle = ({ fill, x, y, r, visible }) => {

  const styles = getStyles(visible);

  return (
    <g style={{ transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)' }}>
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
