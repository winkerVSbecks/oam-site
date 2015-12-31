import test from 'tape';
import core from './core-reducer';
import { BLEND_FILTER } from './constants';
import { WINDOW_RESIZE, TOGGLE_CIRCLE } from '../actions/constants';

const initialState = {
  width: 100,
  height: 100,
  bgFill: '#FD28FC',
  windowWidth: 100
};


test('Reducers/core: #WINDOW_RESIZE', (t) => {

  t.deepEqual((core(initialState, {
    type: WINDOW_RESIZE,
    width: 144,
    height: 90,
    windowWidth: 1440
  })), {
    width: 144,
    height: 90,
    bgFill: '#FD28FC',
    windowWidth: 1440
  });
  t.end();

});
