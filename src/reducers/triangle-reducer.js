import { WINDOW_RESIZE, TOGGLE_TRIANGLE } from '../actions/constants';
import { BLEND_FILTER, BASE } from './constants';
import * as R from 'ramda';

const initialState = {
  vertices: [
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  fill: '#00FFFF',
  visible: true,
  mixBlendMode: BLEND_FILTER
};

/**
 * Triangle action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function triangle(state = initialState, action) {

  switch (action.type) {

    case WINDOW_RESIZE:
      return R.merge(state, getTriangleVertices(action));

    case TOGGLE_TRIANGLE:
      return R.merge(state, {
        visible: !state.visible
      });

    default:
      return state;
  }

}

/**
 * Get the triangle vertices
 * @param  {Number} options.width
 * @param  {Number} options.height
 */
function getTriangleVertices({ width, height }) {

  const r = (width >= height ? width : height) * BASE;
  const w = width / 2;
  const h = height / 2;

  const vertices = [
    [w - r, h + r],
    [w + r, h + r],
    [w, h - 0.8 * r]
  ];

  return { vertices };

}

/**
 * Degree to radians
 * @param  {Number} angle Angle in degrees
 * @return {Number}       Angle in radians
 */
function degToRad(angle) {

  return Math.PI * angle / 180;

};
