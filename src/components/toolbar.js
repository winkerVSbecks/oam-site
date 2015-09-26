import React, { Component } from 'react';
import * as R from 'ramda';

/**
 * The Toolbar
 */
export default class Toolbar extends Component {

  render() {

    const { s, triangle, square, circle } = this.props;
    const { toggleTriangle, toggleSquare, toggleCircle } = this.props;
    const styles = {
      cursor: 'pointer',
      width: s,
      height: s
    };

    const circleStyles = R.merge(styles, {
      backgroundColor: getFill(circle)
    });

    const triangleStyles = R.merge(styles, {
      width: 0,
      height: 0,
      borderLeft: `${s * 0.6 }px solid transparent`,
      borderRight: `${s * 0.6 }px solid transparent`,
      borderBottom: `${s}px solid ${getFill(triangle)}`
    });

    const squareStyles = R.merge(styles, {
      backgroundColor: getFill(square)
    });

    return (
      <div className="absolute bottom-0 left-0 flex px3 py2">

        <div className="flex-auto mr1 circle"
          style={ circleStyles }
          onClick={ toggleCircle }>
        </div>

        <div className="flex-auto mr1"
          style={ triangleStyles }
          onClick={ toggleTriangle }>
        </div>

        <div className="flex-auto"
          style={ squareStyles }
          onClick={ toggleSquare }>
        </div>

      </div>
    );

  }

}


function getFill(isVisible) {
  return isVisible ? '#2cfffe' : '#999999';
}
