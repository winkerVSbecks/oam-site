import React, { Component } from 'react';
import * as R from 'ramda';

/**
 * The Toolbar
 */
export default class Toolbar extends Component {

  render() {

    const { triangle, square, circle, width, visible } = this.props;
    const s = getSize(width);
    const { toggleTriangle, toggleSquare, toggleCircle } = this.props;
    const styles = {
      cursor: 'pointer',
      width: s + 'vw',
      height: s + 'vw',
      transition: 'all ease-in-out 300ms'
    };

    const circleStyles = R.merge(styles, {
      backgroundColor: getFill(circle)
    });

    const triangleStyles = R.merge(styles, {
      width: 0,
      height: 0,
      borderLeft: `${s * 0.6}vw solid transparent`,
      borderRight: `${s * 0.6}vw solid transparent`,
      borderBottom: `${s}vw solid ${getFill(triangle)}`,
      marginRight: '0.75rem'
    });

    const squareStyles = R.merge(styles, {
      backgroundColor: getFill(square)
    });

    const containerStyles = {
      margin: width < 550 ? '0 auto' : 0
    };

    const toolbarStyles = {
      backgroundColor: width < 550 ? 'rgba(0,0,0,0.05)' : 'transparent'
    };

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

  }

}


/**
 * Get fill based on state
 * @param  {Boolean} isVisible
 * @return {String}  Fill colour
 */
function getFill(isVisible) {
  return isVisible ? '#2cfffe' : '#999999';
}

/**
 * Get the size of buttons
 * @param  {Number} width
 * @return {Number} size
 */
function getSize(width) {

  if (width < 400) {
    return 24;
  } else if (width >= 400 & width < 550) {
    return 16;
  } else if (width >= 550 & width < 750) {
    return 8;
  } else if (width >= 750 & width < 1000) {
    return 6;
  } else if (width >= 1000 & width < 1200) {
    return 4;
  } else {
    return 3;
  }

}
