import { WINDOW_RESIZE, TOGGLE_TRIANGLE, CLEAR } from '../actions/constants';
import { BLEND_FILTER, BASE } from './constants';
import * as R from 'ramda';
import klang from '../assets/klang.mp3';
import closeTheLid from '../assets/klang-reverse.mp3';

const open = new Audio(klang);
const close = new Audio(closeTheLid);
const delay = R.test(/^google/, R.toLower(navigator.vendor)) ? 300 : 0;

const isSafari = R.test(/^apple/, R.toLower(navigator.vendor));
if (!isSafari) { close.playbackRate = 1.5; }

const initialState = {
  x: 0,
  y: 0,
  vertices: [
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  r: 0,
  fill: '#00FFFF',
  visible: false,
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

    case CLEAR:
      setTimeout(() => close.play(), delay);
      return R.merge(state, { visible: false });

    case TOGGLE_TRIANGLE:
      const visible = !state.visible;

      if (visible) {
        open.play();
      } else {
        setTimeout(() => close.play(), delay);
      }

      return R.merge(state, { visible });

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
  const x = width / 2;
  const y = height / 2;

  const vertices = [
    [-r, r],
    [r, r],
    [0, -0.8 * r]
  ];

  return { vertices, x, y, r };

}

/**
 * Degree to radians
 * @param  {Number} angle Angle in degrees
 * @return {Number}       Angle in radians
 */
function degToRad(angle) {

  return Math.PI * angle / 180;

};
