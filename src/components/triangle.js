import React, { Component, classSet } from 'react';
import Radium from 'radium';
import { getTriangleStyles, getMaskStyles } from '../styles/triangle-styles';
import * as R from 'ramda';

/**
 * The Triangle
 */
const Triangle = ({ fill, vertices, visible, x, y, r }) => {

  const d = buildD(vertices);
  const triangleStyles = getTriangleStyles(visible);

  return (
    <g transform={ 'translate(' + x + ', ' + y + ') rotate(360)' }>
      <defs>
        <Mask visible={ visible } r={ r }/>
      </defs>
      <path style={ triangleStyles }
        fill={ fill }
        d={ d }
        clipPath="url(#circle-mask)" />
    </g>
  );

};

export default Radium(Triangle);


/**
 * Mask
 */
class Mask extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {
    const { visible, r } = this.props;
    const maskStyles = getMaskStyles(visible, r);

    return (
      <clipPath id="circle-mask">
        <circle r={ 1.5 * r }
          cx={ 3 * r } cy={ 3 * r }
          style={ maskStyles }>
        </circle>
      </clipPath>
    );
  }

};

/**
 * Utilities
 */
function buildD(vertices) {
  return [
    'M', ...vertices[0],
    'L', ...vertices[0],
    'L', ...vertices[1],
    'L', ...vertices[2],
    'Z'
  ].join(' ');
}
