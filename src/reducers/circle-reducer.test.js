import test from 'tape';
import circle from './circle-reducer';
import { BLEND_FILTER } from './constants';
import { WINDOW_RESIZE, TOGGLE_CIRCLE } from '../actions/constants';

const initialState = {
  x: 0,
  y: 0,
  r: 0,
  fill: '#FFFF00',
  visible: true,
  mixBlendMode: BLEND_FILTER
};


test('Reducers/circle: #TOGGLE_CIRCLE', (t) => {

  t.deepEqual((circle(initialState, { type: TOGGLE_CIRCLE })), {
    x: 0,
    y: 0,
    r: 0,
    fill: '#FFFF00',
    visible: false,
    mixBlendMode: BLEND_FILTER
  });
  t.end();

});

test('Reducers/circle: #WINDOW_RESIZE', (t) => {

  t.deepEqual((circle(initialState, {
    type: WINDOW_RESIZE,
    width: 1440,
    height: 900
  })), {
    x: 720,
    y: 450,
    r: 162,
    fill: '#FFFF00',
    visible: true,
    mixBlendMode: BLEND_FILTER
  });
  t.deepEqual((circle(initialState, {
    type: WINDOW_RESIZE,
    width: 600,
    height: 1200
  })), {
    x: 300,
    y: 600,
    r: 135,
    fill: '#FFFF00',
    visible: true,
    mixBlendMode: BLEND_FILTER
  });
  t.end();

});
