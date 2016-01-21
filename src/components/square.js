import React, { Component } from 'react';
import getStyles from '../styles/square-styles';


/**
 * The Square
 */
const Square = ({ fill, x, y, s, visible }) => {

  const styles = getStyles(visible, s);

  return (
    <g style={{ transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)' }}>
      <rect style={ styles }
        fill={ fill }
        x={ 0 }
        y={ 0 }
        width={ s }
        height={ s } />
    </g>
  );

};

export default Square;
