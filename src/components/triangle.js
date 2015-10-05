import React, { Component, classSet } from 'react';
import classNames from 'classNames';

/**
 * The Triangle
 */
export default class Triangle extends Component {

  render() {

    const { fill, vertices, visible, mixBlendMode } = this.props;
    const d = [
      'M', ...vertices[0],
      'L', ...vertices[0],
      'L', ...vertices[1],
      'L', ...vertices[2],
      'Z'
    ].join(' ');

    const classes = classNames({ 'display-none': !visible });
    const styles = { mixBlendMode: mixBlendMode };

    return (
      <path style={ styles }
        className={ classes }
        fill={ fill }
        opacity={ 0.5 }
        d={ d } />
    );

  }

}
