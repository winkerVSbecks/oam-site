import Radium from 'radium';

const MOVE = Radium.keyframes({

  '0%': { 'stroke-dasharray': '0 500' },
  '25%': {
    'stroke-dasharray': '50 500',
    'stroke-dashoffset': -50
  },
  '75%': {
    'stroke-dasharray': '250 500',
    'stroke-dashoffset': -250
  },
  '100%': {
    'stroke-dasharray': '100 500',
    'stroke-dashoffset': -500
  }

});

export function getStyles(visible, s) {

  const animation = MOVE;
  const easing = 'cubic-bezier(0.4, 0, 0.2, 1)';
  const time = 3;

  return {
    animation: `${animation} ${time}s ${easing}`,
    strokeDasharray: '0 500'
  };

}
