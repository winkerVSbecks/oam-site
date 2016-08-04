import React, { Component } from 'react';
import Radium from 'radium';
import TweenLite from 'gsap';
import * as R from 'ramda';
import tl, { t1, t2 } from '../styles/loading-timeline';

const circleStyles = {
  backfaceVisibility: 'hidden',
  perspective: 1000
};

/**
 * The Circle
 */
class Circle extends Component {

  componentDidMount() {
    const { y, r } = this.props;

    tl.fromTo(this._circle, t1, {
      transformOrigin: '50% 50%',
      transform: `translate3d(${-2.1*r}px, ${-y-2*r}px, 0px)`,
    }, {
      transform: `translate3d(${-2.1*r}px, 0px, 0px)`,
      ease: Elastic.easeOut.config(1, 0.75),
    }, 'phase-1')
    .to(this._circle, t1, {
      transform: `translate3d(0px, 0px, 0px)`,
      ease: Expo.easeInOut,
    }, 'phase-2');
  }

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  jelly = () => {
    TweenLite.fromTo(this._circle, 1.5, {
      attr:{ r: 0 }
    }, {
      attr:{ r: this.props.r },
      ease: Elastic.easeOut.config(1, 0.3)
    });
  }

  swooshReverse = () => {
    TweenLite.fromTo(this._circle, 0.2, {
      attr:{ r: this.props.r }
    }, {
      attr:{ r: 0 },
      ease: Power4.easeOut,
    });
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    if (prevProps.visible === visible) { return; }

    if (visible) {
      this.jelly();
    } else {
      this.swooshReverse();
    }
  }

  render() {
    const { fill, x, y, r, visible } = this.props;

    return (
      <g style={{ transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)' }}>
        <circle ref={ (c) => this._circle = c }
          style={ circleStyles }
          fill={ fill }
          opacity={ 0.5 }
          cx={ 0 }
          cy={ 0 }
          r={ r } />
      </g>
    );
  }

}

export default Radium(Circle);
