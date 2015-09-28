import React, { Component, PropTypes } from 'react';
import css from '../app.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Canvas from '../components/canvas';
import Toolbar from '../components/toolbar';

class App extends Component {

  render() {

    const toolbarProps = {
      triangle: this.props.triangle.visible,
      square: this.props.square.visible,
      circle: this.props.circle.visible,
      toggleTriangle: this.props.toggleTriangle,
      toggleSquare: this.props.toggleSquare,
      toggleCircle: this.props.toggleCircle,
      width: this.props.canvas.windowWidth
    };

    return (
      <div>
        <Canvas { ...this.props } />
        <Toolbar { ...toolbarProps } />
      </div>
    );

  }

};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect((state) => state, mapDispatchToProps)(App);
