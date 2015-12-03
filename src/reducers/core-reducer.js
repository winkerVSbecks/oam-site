import { WINDOW_RESIZE } from '../actions/constants';
import * as R from 'ramda';

const initialState = {
  width: 100,
  height: 100,
  bgFill: '#FD28FC',
  windowWidth: 100
};

/**
 * Core action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function core(state = initialState, action) {

  switch (action.type) {

    case WINDOW_RESIZE:
      return R.merge(state, {
        width: action.width,
        height: action.height,
        windowWidth: action.windowWidth
      });

    default:
      return state;
  }

}
