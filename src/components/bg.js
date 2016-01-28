import React from 'react';

/**
 * The Triangle in the background
 */
const BG = ({ fill, w, h }) => {

  const d = [
    'M', w / 2, 0,
    'H', w,
    'V', h,
    'H', w / 2,
    'Z'
  ].join(' ');

  return (
    <path fill={ fill } style={{ transform: 'translate3d(0px, 0px, 0px)' }}
      d={ d } />
  );

};


export default BG;
