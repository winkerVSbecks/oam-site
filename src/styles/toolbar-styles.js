import * as R from 'ramda';

/**
 * Get fill based on state
 * @param  {Boolean} isVisible
 * @return {String}  Fill colour
 */
function getFill(isVisible) {
  return isVisible ? '#2cfffe' : '#999999';
}

/**
 * Get the size of buttons
 * @param  {Number} width
 * @return {Number} size
 */
function getSize(width) {

  if (width < 400) {
    return 24;
  } else if (width >= 400 & width < 550) {
    return 16;
  } else if (width >= 550 & width < 750) {
    return 8;
  } else if (width >= 750 & width < 1000) {
    return 6;
  } else if (width >= 1000 & width < 1200) {
    return 4;
  } else {
    return 3;
  }

}

const base = (s) => ({
  cursor: 'pointer',
  width: s + 'vw',
  height: s + 'vw',
  transition: 'all ease-in-out 300ms'
});

const circleStyles = (s, circle) => R.merge(base(s), {
  backgroundColor: getFill(circle)
});

const triangleStyles = (s, triangle) => R.merge(base(s), {
  width: 0,
  height: 0,
  borderLeft: `${s * 0.6}vw solid transparent`,
  borderRight: `${s * 0.6}vw solid transparent`,
  borderBottom: `${s}vw solid ${getFill(triangle)}`,
  marginRight: '0.75rem'
});

const squareStyles = (s, square) => R.merge(base(s), {
  backgroundColor: getFill(square)
});

const containerStyles = (s, width) => ({
  margin: width < 550 ? '0 auto' : 0
});

const toolbarStyles = (s, width) => ({
  backgroundColor: width < 550 ? 'rgba(0,0,0,0.05)' : 'transparent'
});

export function getStyles({width, circle, triangle, square}) {
  const s = getSize(width);

  return {
    circleStyles: circleStyles(s, circle),
    triangleStyles: triangleStyles(s, triangle),
    squareStyles: squareStyles(s, square),
    containerStyles: containerStyles(s, width),
    toolbarStyles: toolbarStyles(s, width)
  };
}
