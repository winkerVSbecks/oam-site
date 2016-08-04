import { WINDOW_RESIZE, SET_PALETTE } from '../actions/constants';
import { BLEND_FILTER, PALETTE, BASE } from './constants';
import Sounds from '../audio';
import * as R from 'ramda';

const initialState = {
  width: 0,
  height: 0,
  bgFill: PALETTE.JAZZY.bg,
  windowWidth: 0,
  palette: 'JAZZY'
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

    case SET_PALETTE:
      Sounds[action.palette].base.play();
      return R.merge(state, {
        palette: action.palette,
        bgFill: PALETTE[action.palette].bg
      });

    default:
      return state;
  }

}
