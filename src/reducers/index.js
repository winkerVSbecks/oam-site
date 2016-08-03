import { combineReducers } from 'redux';
import core from './core-reducer';
import triangle from './triangle-reducer';
import circle from './circle-reducer';
import square from './square-reducer';

const rootReducer = combineReducers({
  core,
  triangle,
  circle,
  square,
});

export default rootReducer;
