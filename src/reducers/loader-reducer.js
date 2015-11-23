import { WINDOW_RESIZE, TOGGLE_LOADER } from '../actions/constants';
import * as R from 'ramda';

const initialState = {
  fill: '#FD28FC', //F85A3E
  stroke: '#2cfffe', // '#EEF4D4',
  didFinish: false,
  w: 0,
  h: 0
};

/**
 * Loader action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function loader(state = initialState, action) {

  switch (action.type) {

    case WINDOW_RESIZE:
      return R.merge(state, getLoaderDef(action));

    case TOGGLE_LOADER:
      return R.merge(state, {
        didFinish: !state.didFinish
      });

    default:
      return state;
  }

}

/**
 * Get the loader definition
 * @param  {Number} options.windowWidth
 * @param  {Number} options.windowHeight
 */
function getLoaderDef({ windowWidth, windowHeight }) {

  return {
    w: windowWidth,
    h: windowHeight
  };

}
