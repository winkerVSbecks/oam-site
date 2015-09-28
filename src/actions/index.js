import { WINDOW_RESIZE, TOGGLE_TRIANGLE, TOGGLE_SQUARE, TOGGLE_CIRCLE }
  from '../actions/constants';

export function windowResize({ width, height }) {

  const w = width >= height ? 100 : width * 100 / height;
  const h = height > width ? 100 : height * 100 / width;

  return {
    type: WINDOW_RESIZE,
    width: w,
    height: h,
    windowWidth: width
  };

}

function toggleShape(type) {
  return {
    type: type
  };
}

export let toggleTriangle = () => toggleShape(TOGGLE_TRIANGLE);
export let toggleSquare = () => toggleShape(TOGGLE_SQUARE);
export let toggleCircle = () => toggleShape(TOGGLE_CIRCLE);
