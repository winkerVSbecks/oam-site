import { combineReducers } from 'redux';
import canvas from './canvas-reducer';
import triangle from './triangle-reducer';
import circle from './circle-reducer';
import square from './square-reducer';
import loader from './loader-reducer';

const rootReducer = combineReducers({
  canvas,
  triangle,
  circle,
  square,
  loader
});

export default rootReducer;
