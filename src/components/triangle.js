import React, { Component, classSet } from 'react';
import Radium from 'radium';
import { getTriangleStyles } from '../styles/triangle-styles';
import * as R from 'ramda';
import TweenLite from 'gsap';

/**
 * The Triangle
 */
const Triangle = ({ fill, vertices, visible, x, y, r }) => {

  const d = buildD(vertices);
  const triangleStyles = getTriangleStyles(visible);

  return (
    <g style={{
      transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)'
    }}>
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

  componentDidMount() {

    const { r } = this.props;
    const dist = 3 * r;

    this.APPEAR = TweenLite.fromTo(this._circle, 1, {
      attr:{ cx: dist, cy: dist }
    }, {
      attr:{ cx: 0, cy: 0 },
      ease: Power3.easeInOut,
      paused: true
    });

    this.DISAPPEAR = TweenLite.fromTo(this._circle, 0.6, {
      attr:{ cx: 0, cy: 0 }
    }, {
      attr:{ cx: dist, cy: dist },
      ease: Power3.easeInOut,
      paused: true
    });

  }

  componentDidUpdate() {

    const { visible } = this.props;

    if (visible) {
      this.APPEAR.play(0);
    } else {
      this.DISAPPEAR.play(0);
    }

  }

  render() {

    const { visible, r } = this.props;
    const loc = visible ? 3 * r : 0;

    return (
      <clipPath id="circle-mask">
        <circle r={ 1.5 * r }
          cx={ loc } cy={ loc }
          ref={(c) => this._circle = c}>
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
