import React from 'react';
import { getStyles } from '../styles/toolbar-styles';

/**
 * The Toolbar
 */
const Toolbar = (props) => {

  const { toggleTriangle, toggleSquare, toggleCircle } = props;
  const { toolbarStyles, containerStyles, circleStyles,
    triangleStyles, squareStyles } = getStyles(props);

  return (
    <div className="absolute bottom-0 left-0 flex px3 py2 col-12 border-box"
      style={ toolbarStyles }>
      <div className="flex mx-auto"
        style={ containerStyles }>

        <div className="mr1 circle"
          style={ circleStyles }
          onClick={ toggleCircle }>
        </div>

        <div style={ triangleStyles }
          onClick={ toggleTriangle }>
        </div>

        <div style={ squareStyles }
          onClick={ toggleSquare }>
        </div>

      </div>
    </div>
  );

};


export default Toolbar;
