import React, { Component } from 'react';
import classNames from 'classNames';

/**
 * The Square
 */
export default class Square extends Component {

  render() {

    const { fill, x, y, s, visible, mixBlendMode } = this.props;
    const classes = classNames({ 'display-none': !visible });
    const styles = { mixBlendMode: mixBlendMode };

    return (
      <rect style={ styles }
        className={ classes }
        fill={ fill }
        opacity={ 0.5 }
        x={ x }
        y={ y }
        width={ s }
        height={ s } />
    );

  }

}
