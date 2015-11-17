import React, { Component } from 'react';

/**
 * The Triangle in the background
 */
export default class BG extends Component {

  render() {

    const { fill, w, h } = this.props;

    const d = [
      'M', w / 2, 0,
      'H', w,
      'V', h,
      'H', w / 2,
      'Z'
    ].join(' ');

    return (
      <path fill={ fill }
        d={ d } />
    );

  }

}
