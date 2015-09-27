import { WINDOW_RESIZE, TOGGLE_CIRCLE } from '../actions/constants';
import * as R from 'ramda';

const initialState = {
  x: 0,
  y: 0,
  r: 0,
  fill: '#faff00',
  visible: true
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
      return R.merge(state, {
        visible: !state.visible
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
  const r = (width >= height ? width : height) / 8;

  return { x, y, r };

}
