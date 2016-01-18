import React from 'react';
import Radium from 'radium';
import { getStyles } from '../styles/colour-selector-styles';
import { JAZZY, AWAKE, SLEEPY, ZEN } from '../reducers/constants';

/**
 * Colour Selector
 */
const ColourSelector = ({ setPalette, width, palette }) => {

  const { toolbarStyles, containerStyles, squareStyles } = getStyles(width);

  const setJazzy = () => setPalette('JAZZY');
  const setAwake = () => setPalette('AWAKE');
  const setSleepy = () => setPalette('SLEEPY');
  const setZen = () => setPalette('ZEN');

  return (
    <div className="absolute top-0 left-0 flex py2 col-12 border-box right"
      style={ toolbarStyles }>
      <div className="flex mx-auto col-12 flex-row-reverse"
        style={ containerStyles }>

        <div style={[
            squareStyles,
            { backgroundColor: palette === 'ZEN' ? '#fff' : ZEN.tag }
          ]}
          onClick={ setZen }>
        </div>

        <div style={[
            squareStyles,
            { backgroundColor: palette === 'SLEEPY' ? '#fff' : SLEEPY.tag }
          ]}
          onClick={ setSleepy }>
        </div>

        <div style={[
            squareStyles,
            { backgroundColor: palette === 'AWAKE' ? '#fff' : AWAKE.tag }
          ]}
          onClick={ setAwake }>
        </div>

        <div style={[
            squareStyles,
            { backgroundColor: palette === 'JAZZY' ? '#fff' : JAZZY.tag }
          ]}
          onClick={ setJazzy }>
        </div>

      </div>
    </div>
  );

};


export default Radium(ColourSelector);
