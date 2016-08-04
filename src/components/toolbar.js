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
    animate(this.refs.clear, 0.25);
  }

  render() {
    const { toggleTriangle, toggleSquare, toggleCircle, clear } = this.props;
    const { toolbarStyles, containerStyles, circleStyles,
      triangleStyles, squareStyles, clearButtonStyles } = getStyles(this.props);

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

          <div style={ clearButtonStyles }
            onClick={ clear }>
            <svg viewBox="0 0 20 20"
              ref="clear">
              <path fill="#fff" d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
                c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
                c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
                c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z">
              </path>
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
