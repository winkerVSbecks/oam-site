import { WINDOW_RESIZE, TOGGLE_CIRCLE, CLEAR, SET_PALETTE }
  from '../actions/constants';
import { PALETTE, BASE } from './constants';
import Sounds from '../audio';
import * as R from 'ramda';

const initialState = {
  x: 0,
  y: 0,
  r: 0,
  fill: PALETTE.JAZZY.circle,
  visible: false,
  sound: Sounds.JAZZY.circle
};

/**
 * Circle action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function circle(state = initialState, action) {

  switch (action.type) {

    case WINDOW_RESIZE:
      return R.merge(state, getCircleDef(action));

    case CLEAR:
      state.sound.play();
      return R.merge(state, { visible: false });

    case TOGGLE_CIRCLE:
      const visible = !state.visible;
      state.sound.play();
      return R.merge(state, { visible });

    case SET_PALETTE:
      return R.merge(state, {
        fill: PALETTE[action.palette].circle,
        sound: Sounds[action.palette].circle
      });

    default:
      return state;
  }

}

/**
 * Get the circle definition
 * @param  {Number} options.width
 * @param  {Number} options.height
 */
function getCircleDef({ width, height }) {

  const x = width / 2;
  const y = height / 2;
  const r = (width >= height ? width : height) * 0.9 * BASE;

  return { x, y, r };

}
