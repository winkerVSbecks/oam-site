import { WINDOW_RESIZE, TOGGLE_TRIANGLE } from '../actions/constants';
import * as R from 'ramda';

const initialState = {
  vertices: [
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  fill: '#02a9ea',
  visible: true
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

  const r = (width >= height ? width : height) / 8;

  const vertices = R.map((_theta) => {

    const theta = degToRad(_theta);

    return [
      width / 2 + r * Math.cos(theta),
      height / 2 + r * Math.sin(theta)
    ];

  }, [30, 150, 270]);

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
