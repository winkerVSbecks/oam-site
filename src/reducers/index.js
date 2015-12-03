import { combineReducers } from 'redux';
import core from './core-reducer';
import triangle from './triangle-reducer';
import circle from './circle-reducer';
import square from './square-reducer';
import loader from './loader-reducer';

const rootReducer = combineReducers({
  core,
  triangle,
  circle,
  square,
  loader
});

export default rootReducer;
