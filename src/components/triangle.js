import React, { Component } from 'react';
import Radium from 'radium';
import * as R from 'ramda';
import TweenLite from 'gsap';

const triangleStyles = {
  backfaceVisibility: 'hidden',
  perspective: 1000,
  opacity: 0.5
};

/**
 * The Triangle
 */
const Triangle = ({ fill, vertices, visible, x, y, r }) => {
  const d = buildD(vertices);

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

  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    if (prevProps.visible === visible) { return; }

    if (visible) {
      this.appear();
    } else {
      this.disappear();
    }
  }

  appear = () => {
    const dist = 3 * this.props.r;
    TweenLite.fromTo(this._circle, 1, {
      attr: { cx: dist, cy: dist }
    }, {
      attr: { cx: 0, cy: 0 },
      ease: Power3.easeInOut,
    });
  }

  disappear = () => {
    const dist = 3 * this.props.r;
    TweenLite.fromTo(this._circle, 0.6, {
      attr: { cx: 0, cy: 0 }
    }, {
      attr: { cx: dist, cy: dist },
      ease: Power3.easeInOut,
    });
  }

  render() {
    const { visible, r } = this.props;

    return (
      <clipPath id="circle-mask">
        <circle r={ 1.5 * r }
          cx={ 0 } cy={ 0 }
          ref={(c) => this._circle = c} />
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
