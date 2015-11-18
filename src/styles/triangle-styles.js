import Radium from 'radium';

export const DASH = Radium.keyframes({

  '25%': {
    'stroke-dashoffset': 75
  },

  '50%': {
    'stroke-dashoffset': 0
  },

  '85%': {
    transform: 'scale(1)',
    'stroke-dashoffset': 0,
    stroke: '#2AFC98',
    opacity: 1
  },

  '100%': {
    'stroke-dashoffset': 0,
    transform: 'scale(1.5)',
    stroke: '#fff',
    opacity: 0
  }

});

export const MASK = Radium.keyframes({

  '25%': {
    'stroke-dashoffset': 75
  },

  '50%': {
    'stroke-dashoffset': 0
  },

  '85%': {
    transform: 'scale(1)',
    'stroke-dashoffset': 0,
    stroke: '#2AFC98',
    opacity: 1
  },

  '100%': {
    'stroke-dashoffset': 0,
    transform: 'scale(1.5)',
    stroke: '#fff',
    opacity: 0
  }

});

export function getTriangleStyles(visible, mixBlendMode) {

  return {
    backfaceVisibility: 'hidden',
    perspective: 1000,
    mixBlendMode: mixBlendMode,
    opacity: 0.5
  };

}

export function getMaskStyles(visible, r) {

  const d = -3 * r + 'px';

  const APPEAR = Radium.keyframes({
    '0%': { transform: 'translate3d(0, 0, 0)' },
    '100%': { transform: `translate3d(${d}, ${d}, 0)` }
  });

  const DISAPPEAR = Radium.keyframes({
    '0%': { transform: `translate3d(${d}, ${d}, 0)` },
    '100%': { transform: 'translate3d(0, 0, 0)' }
  });

  const animation = visible ? APPEAR : DISAPPEAR;
  const easing = 'cubic-bezier(0.55, 0, 0.1, 1)';
  const time = visible ? 500 : 1000;

  return {
    animation: `${animation} ${time}ms ${easing} forwards`
  };

}
