import test from 'tape';
import triangle from './triangle-reducer';
import { BLEND_FILTER } from './constants';
import { WINDOW_RESIZE, TOGGLE_TRIANGLE } from '../actions/constants';

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
  visible: true,
  mixBlendMode: BLEND_FILTER
};


test('Reducers/triangle: #TOGGLE_TRIANGLE', (t) => {

  t.deepEqual((triangle(initialState, { type: TOGGLE_TRIANGLE })), {
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
  });
  t.end();

});

test('Reducers/triangle: #WINDOW_RESIZE', (t) => {

  t.deepEqual((triangle(initialState, {
    type: WINDOW_RESIZE,
    width: 1440,
    height: 900
  })), {
    x: 720,
    y: 450,
    vertices: [
      [-180, 180],
      [180, 180],
      [0, -144]
    ],
    r: 180,
    fill: '#00FFFF',
    visible: true,
    mixBlendMode: BLEND_FILTER
  });
  t.deepEqual((triangle(initialState, {
    type: WINDOW_RESIZE,
    width: 600,
    height: 1200
  })), {
    x: 300,
    y: 600,
    vertices: [
      [-150, 150],
      [150, 150],
      [0, -120]
    ],
    r: 150,
    fill: '#00FFFF',
    visible: true,
    mixBlendMode: BLEND_FILTER
  });
  t.end();

});
