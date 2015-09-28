import { WINDOW_RESIZE } from '../actions/constants';
import * as R from 'ramda';

// $color1: #fd28fc; //rgba(253, 40, 252, 100)
// $color2: #8fbfe0; //rgba(143, 191, 224, 100)
// $color3: #02a9ea; //rgba(2, 169, 234, 100)
// $color4: #faff00; //rgba(250, 255, 0, 100)
// $color5: #7c77b9; //rgba(124, 119, 185, 100)

const initialState = {
  width: 100,
  height: 100,
  bgFill: '#FD28FC',
  windowWidth: 100
};

/**
 * Canvas action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function canvas(state = initialState, action) {

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
