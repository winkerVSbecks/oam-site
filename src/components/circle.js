import React, { Component } from 'react';
import classNames from 'classNames';
import Radium from 'radium';
import * as R from 'ramda';
import trampolineBounce from '../assets/trampoline-bounce.mp3';
import quickReverse from '../assets/quick-reverse.mp3';
const bounce = new Audio(trampolineBounce);
const reverse = new Audio(quickReverse);

/**
 * The Circle
 */
@Radium
export default class Circle extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {

    const jellyKeyframes = Radium.keyframes({
      '0%': {
        transform: 'matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '2.7%': {
        transform: 'matrix3d(0.389, 0, 0, 0, 0, 0.389, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '5.41%': {
        transform: 'matrix3d(0.916, 0, 0, 0, 0, 0.916, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '8.11%': {
        transform: 'matrix3d(1.302, 0, 0, 0, 0, 1.302, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '10.71%': {
        transform: 'matrix3d(1.426, 0, 0, 0, 0, 1.426, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '13.71%': {
        transform: 'matrix3d(1.306, 0, 0, 0, 0, 1.306, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '16.62%': {
        transform: 'matrix3d(1.077, 0, 0, 0, 0, 1.077, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '19.62%': {
        transform: 'matrix3d(0.887, 0, 0, 0, 0, 0.887, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '22.52%': {
        transform: 'matrix3d(0.826, 0, 0, 0, 0, 0.826, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '28.43%': {
        transform: 'matrix3d(0.97, 0, 0, 0, 0, 0.97, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '34.33%': {
        transform: 'matrix3d(1.071, 0, 0, 0, 0, 1.071, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '46.05%': {
        transform: 'matrix3d(0.971, 0, 0, 0, 0, 0.971, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '57.86%': {
        transform: 'matrix3d(1.012, 0, 0, 0, 0, 1.012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '69.57%': {
        transform: 'matrix3d(0.995, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '81.38%': {
        transform: 'matrix3d(1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '93.19%': {
        transform: 'matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }, '100%': {
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
      }
    }, 'jelly');

    const jellyKeyframesReverse = Radium.keyframes({
      '0%': {
        transform: 'scale(1)'
      }, '100%': {
        transform: 'scale(0)'
      }
    }, 'jellyReverse');

    const { fill, x, y, r, visible, mixBlendMode } = this.props;

    if (visible) {
      bounce.play();
    } else {
      reverse.play();
    }

    const animation = visible ? jellyKeyframes : jellyKeyframesReverse;
    const easing = visible ? 'linear' : 'cubic-bezier(0, 0.79, 0, 1)';
    const time = visible ? '1500ms' : '200ms';

    const styles = {
      backfaceVisibility: 'hidden',
      perspective: 1000,
      mixBlendMode: mixBlendMode,
      animation: `${animation} ${time} ${easing} both`,
    };

    return (
      <g transform={ 'translate(' + x + ', ' + y + ')' }>
        <circle style={ styles }
          fill={ fill }
          opacity={ 0.5 }
          cx={ 0 }
          cy={ 0 }
          r={ r }>
        </circle>
      </g>
    );

  }

}
