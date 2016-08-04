import React, { Component } from 'react';
import Radium from 'radium';
import * as R from 'ramda';
import TweenLite from 'gsap';
import tl, { t1} from '../styles/loading-timeline';

const triangleStyles = {
  backfaceVisibility: 'hidden',
  perspective: 1000,
  opacity: 0.5
};

/**
 * The Triangle
 */
class Triangle extends Component {
  componentDidMount() {
    const { y, r } = this.props;

    tl.fromTo(this._triangle, t1, {
      transformOrigin: '50% 50%',
      transform: `translate3d(0px, ${-y-r}px, 0px)`,
    }, {
      transform: `translate3d(0px, 0px, 0px)`,
      ease: Elastic.easeOut.config(1, 0.75),
    }, 'phase-1');
  }

  render() {
    const { fill, vertices, visible, x, y, r } = this.props;
    const d = buildD(vertices);

    return (
      <g style={{
        transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)'
      }}>
        <defs>
          <Mask visible={ visible } r={ r }/>
        </defs>
        <path ref={(c) => this._triangle = c}
          style={ triangleStyles }
          fill={ fill }
          d={ d }
          clipPath="url(#circle-mask)" />
      </g>
    );
  };

}

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
    TweenLite.fromTo(this._circleMask, 1, {
      attr: { cx: dist, cy: dist }
    }, {
      attr: { cx: 0, cy: 0 },
      ease: Power3.easeInOut,
    });
  }

  disappear = () => {
    const dist = 3 * this.props.r;
    TweenLite.fromTo(this._circleMask, 0.6, {
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
          ref={(c) => this._circleMask = c} />
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
