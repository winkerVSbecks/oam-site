import React, { Component } from 'react';

/**
 * The Triangle in the background
 */
class TriangleBG extends Component {

  render() {

    const { fill, w, h } = this.props;

    const d = [
      'M', 0, 0,
      'H', w,
      'L', 0, h,
      'V', 0
    ].join(' ');

    return (
      <path fill={ fill }
        d={ d } />
    );

  }

}

export default TriangleBG;
