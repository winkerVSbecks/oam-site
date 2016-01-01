import { WINDOW_RESIZE, TOGGLE_CIRCLE } from '../actions/constants';
import { BLEND_FILTER, BASE } from './constants';
import * as R from 'ramda';

import trampolineBounce from '../assets/trampoline-bounce.mp3';
import quickReverse from '../assets/trampoline-bounce-reverse.mp3';

const bounce = new Audio(trampolineBounce);
const reverse = new Audio(quickReverse);
reverse.playbackRate = 3;

const initialState = {
  x: 0,
  y: 0,
  r: 0,
  fill: '#FFFF00',
  visible: true,
  mixBlendMode: BLEND_FILTER
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

    case TOGGLE_CIRCLE:
      const visible = !state.visible;

      if (visible) {
        bounce.play();
      } else {
        reverse.play();
      }

      return R.merge(state, { visible });

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
