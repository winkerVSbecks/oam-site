import React, { Component } from 'react';
import Radium from 'radium';
import { getStyles } from '../styles/colour-selector-styles';
import { JAZZY, AWAKE, SLEEPY, ZEN } from '../reducers/constants';
import tl, { t3 } from '../styles/loading-timeline';

/**
 * Colour Selector
 */
class ColourSelector extends Component {

  componentDidMount() {
    animate(this.refs.zen, 0.1);
    animate(this.refs.sleepy, 0.15);
    animate(this.refs.awake, 0.2);
    animate(this.refs.jazzy, 0.25);
  }

  render() {
    const { setPalette, width, palette } = this.props;

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
            onClick={ setZen }
            ref="zen">
          </div>

          <div style={[
              squareStyles,
              { backgroundColor: palette === 'SLEEPY' ? '#fff' : SLEEPY.tag }
            ]}
            onClick={ setSleepy }
            ref="sleepy">
          </div>

          <div style={[
              squareStyles,
              { backgroundColor: palette === 'AWAKE' ? '#fff' : AWAKE.tag }
            ]}
            onClick={ setAwake }
            ref="awake">
          </div>

          <div style={[
              squareStyles,
              { backgroundColor: palette === 'JAZZY' ? '#fff' : JAZZY.tag }
            ]}
            onClick={ setJazzy }
            ref="jazzy">
          </div>

        </div>
      </div>
    );
  }

}


export default Radium(ColourSelector);

function animate(node, offset) {
  tl.fromTo(node, t3, {
    transformOrigin: '100% 0',
    transform: 'scaleX(0)',
  }, {
    transform: 'scaleX(1)',
    ease: Expo.easeOut,
  }, `phase-3+=${ offset }`);
}
