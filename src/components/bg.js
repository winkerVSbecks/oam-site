import React, { Component } from 'react';
import tl, { t3 } from '../styles/loading-timeline';

/**
 * The rectangle in the background
 */
class BG extends Component {

  componentDidMount() {
    tl.fromTo(this._rectangle, t3, {
      transformOrigin: '100% 0',
      transform: 'scaleX(0) translate3d(0px, 0px, 0px)',
    }, {
      transform: 'scaleX(1) translate3d(0px, 0px, 0px)',
      ease: Expo.easeOut,
    }, 'phase-3');
  }

  render() {
    const { fill, w, h } = this.props;

    const d = [
      'M', w / 2, 0,
      'H', w,
      'V', h,
      'H', w / 2,
      'Z'
    ].join(' ');

    return (
      <path style={{ transform: 'scaleY(0) translate3d(0px, 0px, 0px)' }}
        ref={ (c) => this._rectangle = c }
        fill={ fill }
        d={ d } />
    );
  }

}


export default BG;
