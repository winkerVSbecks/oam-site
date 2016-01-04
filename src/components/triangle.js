import React, { Component, classSet } from 'react';
import Radium from 'radium';
import { getTriangleStyles, getMaskStyles } from '../styles/triangle-styles';
import * as R from 'ramda';

/**
 * The Triangle
 */
@Radium
export default class Triangle extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {
    const { fill, vertices, visible, mixBlendMode, x, y, r } = this.props;
    const d = buildD(vertices);
    const triangleStyles = getTriangleStyles(visible, mixBlendMode);
    const maskStyles = getMaskStyles(visible, r);

    return (
      <g transform={ 'translate(' + x + ', ' + y + ') rotate(360)' }>
        <defs>
          <clipPath id="circle-mask">
            <circle r={ 1.5 * r }
              cx={ 3 * r } cy={ 3 * r }
              style={ maskStyles }>
            </circle>
          </clipPath>
        </defs>
        <path style={ triangleStyles }
          fill={ fill }
          d={ d }
          clipPath="url(#circle-mask)" />
      </g>
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
