import { WINDOW_RESIZE, TOGGLE_SQUARE, SET_PALETTE }
  from '../actions/constants';
import { PALETTE, BASE } from './constants';
import Sounds from '../audio';
import * as R from 'ramda';

const initialState = {
  x: 0,
  y: 0,
  s: 0,
  fill: PALETTE.JAZZY.square,
  visible: true,
  sound: Sounds.JAZZY.square
};

/**
 * Square action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function square(state = initialState, action) {

  switch (action.type) {

    case WINDOW_RESIZE:
      return R.merge(state, getSquareDef(action));

    case TOGGLE_SQUARE:
      const visible = !state.visible;
      state.sound.play();
      return R.merge(state, { visible });

    case SET_PALETTE:
      return R.merge(state, {
        fill: PALETTE[action.palette].square,
        sound: Sounds[action.palette].square
      });

    default:
      return state;
  }

}

/**
 * Get the square definition
 * @param  {Number} options.width
 * @param  {Number} options.height
 */
function getSquareDef({ width, height }) {

  const s = (width >= height ? width : height) * BASE * 2;
  const x = (width - s) / 2;
  const y = (height - s) / 2;

  return { x, y, s };

}
