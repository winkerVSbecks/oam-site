import test from 'tape';
import square from './square-reducer';
import { BLEND_FILTER } from './constants';
import { WINDOW_RESIZE, TOGGLE_SQUARE } from '../actions/constants';

const initialState = {
  x: 0,
  y: 0,
  s: 0,
  fill: '#0000FF',
  visible: true,
  mixBlendMode: BLEND_FILTER
};


test('Reducers/square: #TOGGLE_SQUARE', (t) => {

  t.deepEqual((square(initialState, { type: TOGGLE_SQUARE })), {
    x: 0,
    y: 0,
    s: 0,
    fill: '#0000FF',
    visible: false,
    mixBlendMode: BLEND_FILTER
  });
  t.end();

});

test('Reducers/square: #WINDOW_RESIZE', (t) => {

  t.deepEqual((square(initialState, {
    type: WINDOW_RESIZE,
    width: 1440,
    height: 900
  })), {
    x: 540,
    y: 270,
    s: 360,
    fill: '#0000FF',
    visible: true,
    mixBlendMode: BLEND_FILTER
  });
  t.deepEqual((square(initialState, {
    type: WINDOW_RESIZE,
    width: 600,
    height: 1200
  })), {
    x: 150,
    y: 450,
    s: 300,
    fill: '#0000FF',
    visible: true,
    mixBlendMode: BLEND_FILTER
  });
  t.end();

});
