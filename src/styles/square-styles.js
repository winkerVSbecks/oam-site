import Radium from 'radium';
import * as R from 'ramda';

function expand(s) {

  const offset = s * 2 + 'px';

  return Radium.keyframes({

    '0%': { transform: `scaleY(0) translate3d(0, 0, 0)` },
    '50%': { transform: `scaleY(0.25) translate3d(0, ${offset}, 0)` },
    '100%': { transform: `scaleY(1) translate3d(0, 0, 0)` }

  });

}

const COLLAPSE = Radium.keyframes({

  '0%': {
    transform: 'scale3d(1, 1, 1)'
  },
  '30%': {
    transform: 'scale3d(1, 0.01, 0)'
  },
  '100%': {
    transform: 'scale3d(0, 0, 0)'
  }

});

const getStyles = R.memoize((visible, s) => {

  const EXPAND = expand(s);
  const animation = visible ? EXPAND : COLLAPSE;
  const easing = visible ? 'cubic-bezier(0.86, 0, 0.07, 1)' :
    'cubic-bezier(0.55, 0, 0.1, 1)';
  const time = visible ? 1000 : 300;
  const origin = '50% 50%';

  return {
    transformOrigin: origin,
    animation: `${animation} ${time}ms ${easing} forwards`,
    opacity: 0.5
  };

});

export default getStyles;
