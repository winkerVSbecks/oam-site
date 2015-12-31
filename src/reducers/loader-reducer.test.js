import test from 'tape';
import loader from './loader-reducer';
import { BLEND_FILTER } from './constants';
import { WINDOW_RESIZE, TOGGLE_LOADER } from '../actions/constants';

const initialState = {
  fill: '#FD28FC',
  stroke: '#2cfffe',
  didFinish: false,
  w: 0,
  h: 0
};


test('Reducers/loader: #TOGGLE_LOADER', (t) => {

  t.deepEqual((loader(initialState, { type: TOGGLE_LOADER })), {
    fill: '#FD28FC',
    stroke: '#2cfffe',
    didFinish: true,
    w: 0,
    h: 0
  });
  t.end();

});

test('Reducers/loader: #WINDOW_RESIZE', (t) => {

  t.deepEqual((loader(initialState, {
    type: WINDOW_RESIZE,
    windowWidth: 1440,
    windowHeight: 900
  })), {
    fill: '#FD28FC',
    stroke: '#2cfffe',
    didFinish: false,
    w: 1440,
    h: 900,
  });
  t.end();

});
