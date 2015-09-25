import React, { Component } from 'react';
import TriangleBG from '../components/triangle-bg';
import * as R from 'ramda';

/**
 * SVG Canvas
 * This component generates the base SVG
 * and sets up all the sub-components
 */
class Canvas extends Component {

  handleResize = () => {
    this.props.onResize({
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

    const { width, height, bgFill } = this.props;

    const w = width >= height ? 100 : width * 100 / height;
    const h = height > width ? 100 : height * 100 / width;

    const viewBox = [0, 0, w, h].join(' ');

    return (
      <svg version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox={ viewBox }>

        <TriangleBG fill={ bgFill }
          w={ w }
          h={ h } />

      </svg>
    );

  }

}

export default Canvas;
