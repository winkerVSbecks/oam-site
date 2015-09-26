import React, { Component, PropTypes } from 'react';
import css from '../app.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Canvas from '../components/canvas';

class App extends Component {

  render() {

    const { windowResize } = this.props;

    return (
      <Canvas { ...this.props.canvas } onResize={ windowResize } />
    );

  }

};


function mapStateToProps(state) {
  return {
    canvas: state.canvas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);