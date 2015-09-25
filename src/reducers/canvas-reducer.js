import { WINDOW_RESIZE } from '../actions/constants';

const initialState = {
  width: 100,
  height: 100,
  bgFill: '#FD28FC'
};

/**
 * Canvas action handlers
 * @param  {Object} state  State of the app
 * @param  {Object} action Action object
 */
export default function canvas(state = initialState, action) {

  switch (action.type) {

    case WINDOW_RESIZE:
      return Object.assign({}, state, {
        width: action.width,
        height: action.height
      });

    default:
      return state;
  }

}
