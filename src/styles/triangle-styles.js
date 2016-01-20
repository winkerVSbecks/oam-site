import Radium from 'radium';

export function getTriangleStyles(visible) {

  return {
    backfaceVisibility: 'hidden',
    perspective: 1000,
    opacity: 0.5
  };

}

export function getMaskStyles(visible, r) {

  const dist = -3 * r + 'px';

  const APPEAR = Radium.keyframes({
    '0%': { transform: 'translate3d(0, 0, 0)' },
    '100%': { transform: `translate3d(${dist}, ${dist}, 0)` }
  });

  const DISAPPEAR = Radium.keyframes({
    '0%': { transform: `translate3d(${dist}, ${dist}, 0)` },
    '100%': { transform: 'translate3d(0, 0, 0)' }
  });

  const animation = visible ? APPEAR : DISAPPEAR;
  const easing = 'cubic-bezier(0.55, 0, 0.1, 1)';
  const time = visible ? 500 : 1000;

  return {
    transform: 'translate3d(0, 0, 0)',
    animation: `${animation} ${time}ms ${easing} forwards`
  };

}
