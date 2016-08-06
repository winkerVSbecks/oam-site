import React, { Component } from 'react';
import { getStyles } from '../styles/toolbar-styles';
import tl, { t3 } from '../styles/loading-timeline';

/**
 * The Toolbar
 */
class Toolbar extends Component {

  componentDidMount() {
    animate(this.refs.circle, 0.1);
    animate(this.refs.triangle, 0.15);
    animate(this.refs.square, 0.2);
    animate(this.refs.toggleAbout, 0.25);
  }

  render() {
    const { toggleTriangle, toggleSquare, toggleCircle, toggleAbout } = this.props;
    const { toolbarStyles, containerStyles, circleStyles,
      triangleStyles, squareStyles, aboutButtonStyles } = getStyles(this.props);

    return (
      <div className="absolute bottom-0 left-0 flex py2 col-12 border-box"
        style={ toolbarStyles }>
        <div className="flex mx-auto col-12 flex-stretch"
          style={ containerStyles }>

          <div className="mr1 circle"
            style={ circleStyles }
            onClick={ toggleCircle }
            ref="circle">
          </div>

          <div style={ triangleStyles }
            onClick={ toggleTriangle }
            ref="triangle">
          </div>

          <div style={ squareStyles }
            onClick={ toggleSquare }
            ref="square">
          </div>

          <div className="flex-auto"></div>

          <div style={ aboutButtonStyles }
            onClick={ toggleAbout }>
            <svg viewBox="0 0 20 20"
              ref="toggleAbout">
              <text x="10" y="13">
                About
              </text>
            </svg>
          </div>

        </div>
      </div>
    );
  }

}


export default Toolbar;

function animate(node, offset) {
  tl.fromTo(node, t3, {
    transform: 'translate3d(0, 30vw, 0)',
  }, {
    transform: 'translate3d(0, 0, 0)',
    ease: Expo.easeOut,
  }, `phase-3+=${ offset }`);
}
