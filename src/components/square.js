import React, { Component } from 'react';
import TweenLite from 'gsap';
import * as R from 'ramda';

const squareStyles = {
  opacity: 0.5,
  transformOrigin: '50% 50%',
};

/**
 * The Square
 */
class Square extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  expand = () => {
    const offset = this.props.s * 2 + 'px';

    new TimelineLite()
      .set(this._square, {
        transformOrigin: '50% 50%',
        transform: `scaleY(0) translate3d(0, 0, 0)`,
      })
      .to(this._square, 0.5, {
        transform: `scaleY(0.25) translate3d(0, ${ offset }, 0)`,
        ease: Power4.easeInOut,
      })
      .to(this._square, 0.4, {
        transform: `scaleY(1) translate3d(0, 0, 0)`,
        ease: Power4.easeInOut,
      });
  }

  collapse = () => {
    new TimelineLite()
      .set(this._square, {
        transformOrigin: '50% 50%',
        transform: 'scale3d(1, 1, 1)',
      })
      .to(this._square, 0.09, {
        transformOrigin: '50% 50%',
        transform: 'scale3d(1, 0.01, 0)',
        ease: Expo.easeInOut,
      })
      .to(this._square, 0.3, {
        transform: 'scale3d(0, 0, 0)',
        ease: Expo.easeInOut,
      });
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    if (prevProps.visible === visible) { return; }

    if (visible) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  render () {
    const { fill, x, y, s, visible } = this.props;

    return (
      <g style={{ transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)' }}>
        <rect ref={ (c) => this._square = c }
          style={ squareStyles }
          fill={ fill }
          x={ 0 }
          y={ 0 }
          width={ s }
          height={ s } />
      </g>
    );
  }

}

export default Square;
