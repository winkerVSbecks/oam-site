import Radium from 'radium';
import * as R from 'ramda';

export const JELLY = Radium.keyframes({
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

export const SWOOSH_REVERSE = Radium.keyframes({
  '0%': {
    transform: 'scale(1)'
  }, '100%': {
    transform: 'scale(0)'
  }
}, 'jellyReverse');

const getStyles = R.memoize((visible) => {
  const animation = visible ? JELLY : SWOOSH_REVERSE;
  const easing = visible ? 'linear' : 'cubic-bezier(0, 0.79, 0, 1)';
  const time = visible ? '1500ms' : '200ms';

  return {
   backfaceVisibility: 'hidden',
   perspective: 1000,
   animation: `${animation} ${time} ${easing} both`,
  };
});


export default getStyles;
