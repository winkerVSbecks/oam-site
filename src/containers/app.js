import React, { Component, PropTypes } from 'react';
import css from '../app.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Canvas from '../components/canvas';
import Toolbar from '../components/toolbar';
import Loader from '../components/loader';
import * as R from 'ramda';

class App extends Component {

  handleResize = () => {
    this.props.windowResize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {

    const toolbarProps = {
      triangle: this.props.triangle.visible,
      square: this.props.square.visible,
      circle: this.props.circle.visible,
      toggleTriangle: this.props.toggleTriangle,
      toggleSquare: this.props.toggleSquare,
      toggleCircle: this.props.toggleCircle,
      width: this.props.core.windowWidth
    };

    const loaderProps = R.merge(R.clone(this.props.loader), {
      toggleLoader: this.props.toggleLoader,
    });

    const content = !this.props.loader.didFinish ?
      <Loader { ...loaderProps } /> :
      (<div>
        <Canvas { ...this.props } />
        <Toolbar { ...toolbarProps } />
      </div>);

    return content;

  }

};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect((state) => state, mapDispatchToProps)(App);
