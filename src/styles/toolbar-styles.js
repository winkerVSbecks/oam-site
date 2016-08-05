import * as R from 'ramda';

/**
 * Get fill based on state
 * @param  {Boolean} isVisible
 * @return {String}  Fill colour
 */
function getFill(isVisible, fill) {
  return isVisible ? fill : '#999999';
}

/**
 * Get the size of buttons
 * @param  {Number} width
 * @return {Number} size
 */
function getSize(width) {

  if (width < 400) {
    return 20;
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
  transition: 'width ease-in-out 300ms, height ease-in-out 300ms'
});

const circleStyles = (s, circle, fill) => R.merge(base(s), {
  backgroundColor: getFill(circle, fill)
});

const triangleStyles = (s, triangle, fill) => R.merge(base(s), {
  width: 0,
  height: 0,
  borderLeft: `${s * 0.6}vw solid transparent`,
  borderRight: `${s * 0.6}vw solid transparent`,
  borderBottom: `${s}vw solid ${getFill(triangle, fill)}`,
  marginRight: '0.75rem'
});

const squareStyles = (s, square, fill) => R.merge(base(s), {
  backgroundColor: getFill(square, fill),
  marginRight: '0.75rem'
});

const aboutButtonStyles = (s, width) => {
  return {
    cursor: 'pointer',
    width: (width < 400 ? s : 2 * s) + 'vw',
    height: s + 'vw',
    transition: 'width ease-in-out 300ms, height ease-in-out 300ms',
    letterSpacing: '0.05em',
    textAnchor: 'middle',
    fontSize: width < 400 ? 5 : 10,
    fill: '#fff',
  };
};

const containerStyles = (s, width) => ({
  margin: width < 550 ? '0 auto' : 0
});

const toolbarStyles = (s, width) => ({
  backgroundColor: width < 550 ? 'rgba(0,0,0,0.05)' : 'transparent',
  paddingLeft: width < 550 ? '1rem' : '2rem',
  paddingRight: width < 550 ? '1rem' : '2rem'
});

export function getStyles({width, circle, triangle, square, fills}) {
  const s = getSize(width);

  return {
    circleStyles: circleStyles(s, circle, fills.circle),
    triangleStyles: triangleStyles(s, triangle, fills.triangle),
    squareStyles: squareStyles(s, square, fills.square),
    containerStyles: containerStyles(s, width),
    toolbarStyles: toolbarStyles(s, width),
    aboutButtonStyles: aboutButtonStyles(s, width)
  };
}
