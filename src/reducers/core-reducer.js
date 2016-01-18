import { WINDOW_RESIZE, SET_PALETTE } from '../actions/constants';
import { BLEND_FILTER, PALETTE, BASE } from './constants';
import * as R from 'ramda';
import piano from '../assets/piano.mp3';
import happy from '../assets/happy.mp3';
import pirate from '../assets/pirate.mp3';
import resolve from '../assets/resolve.mp3';

const paletteSounds = {
  JAZZY: new Audio(piano),
  AWAKE: new Audio(happy),
  SLEEPY: new Audio(pirate),
  ZEN: new Audio(resolve)
};

const initialState = {
  width: 100,
  height: 100,
  bgFill: PALETTE.JAZZY.bg,
  windowWidth: 100,
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
      paletteSounds[action.palette].play();
      return R.merge(state, {
        palette: action.palette,
        bgFill: PALETTE[action.palette].bg
      });

    default:
      return state;
  }

}
