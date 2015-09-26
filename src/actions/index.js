import { WINDOW_RESIZE } from '../actions/constants';

export function windowResize({ width, height }) {

  return {
    type: WINDOW_RESIZE,
    width,
    height
  };

}
