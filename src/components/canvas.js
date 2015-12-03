import React, { Component } from 'react';
import BG from '../components/bg';
import Circle from '../components/circle';
import Square from '../components/square';
import Triangle from '../components/triangle';
import Radium from 'radium';

/**
 * SVG Canvas
 * This component generates the base SVG
 * and sets up all the sub-components
 */
const Canvas = ({ core, square, triangle, circle }) => {

  const { width, height, bgFill } = core;
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

      <Square { ...square } />
      <Triangle { ...triangle } />
      <Circle { ...circle } />
    </svg>
  );

};

export default Canvas;
