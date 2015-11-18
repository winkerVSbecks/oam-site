import React, { Component, classSet } from 'react';
import Radium from 'radium';
import { DASH, MASK, getTriangleStyles, getSideStyles,
  getMaskStyles } from '../styles/triangle-styles';
import * as R from 'ramda';
import klang from '../assets/klang.mp3';
import closeTheLid from '../assets/close-the-lid.mp3';

const open = new Audio(klang);
const close = new Audio(closeTheLid);

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

    if (visible) {
      open.play();
    } else {
      const delay = R.test(/^google/, R.toLower(navigator.vendor)) ? 300 : 0;
      setTimeout(() => close.play(), delay);
    }

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

}

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
