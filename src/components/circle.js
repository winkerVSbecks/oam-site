import React, { Component } from 'react';
import classNames from 'classNames';

/**
 * The Circle
 */
export default class Circle extends Component {

  render() {

    const { fill, x, y, r, visible, mixBlendMode } = this.props;
    const classes = classNames({ 'display-none': !visible });
    const styles = { mixBlendMode: mixBlendMode };

    return (
      <circle style={ styles }
        className={ classes }
        fill={ fill }
        opacity={ 0.5 }
        cx={ x }
        cy={ y }
        r={ r } />
    );

  }

}
