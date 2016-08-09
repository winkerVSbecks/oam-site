import { WINDOW_RESIZE, TOGGLE_TRIANGLE, TOGGLE_SQUARE, TOGGLE_CIRCLE,
  TOGGLE_LOADER, TOGGLE_ABOUT, SET_PALETTE } from '../actions/constants';

export function windowResize({ width, height }) {

  const w = width >= height ? 100 : width * 100 / height;
  const h = height > width ? 100 : height * 100 / width;

  return {
    type: WINDOW_RESIZE,
    width: w,
    height: h,
    windowWidth: width,
    windowHeight: height
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
export let toggleLoader = () => toggleShape(TOGGLE_LOADER);

export function toggleAbout() {
  return { type: TOGGLE_ABOUT };
}

export function setPalette(palette) {
  return {
    type: SET_PALETTE,
    palette
  };
}

const keyMap = {
  a: toggleCircle,
  s: toggleTriangle,
  d: toggleSquare,
  u: () => setPalette('JAZZY'),
  i: () => setPalette('AWAKE'),
  o: () => setPalette('SLEEPY'),
  p: () => setPalette('ZEN'),
};

export function triggerKeyboardEvents(e) {
  const key = e.key.toLowerCase();
  const action = keyMap[key];
  return action ? action() : {};
}
