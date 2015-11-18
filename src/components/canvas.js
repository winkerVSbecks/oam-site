import React, { Component } from 'react';
import BG from '../components/bg';
import Circle from '../components/circle';
import Square from '../components/square';
import Triangle from '../components/triangle';

/**
 * SVG Canvas
 * This component generates the base SVG
 * and sets up all the sub-components
 */
export default class Canvas extends Component {

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

    const { width, height, bgFill } = this.props.canvas;
    const viewBox = [0, 0, width, height].join(' ');

    return (
      <svg version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox={ viewBox }>

        <BG fill={ bgFill }
          w={ width }
          h={ height } />

        <Square { ...this.props.square } />
        <Triangle { ...this.props.triangle } />
        <Circle { ...this.props.circle } />
      </svg>
    );

  }

}
