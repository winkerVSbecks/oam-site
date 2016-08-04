import * as R from 'ramda';

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

const squareStyles = (s) => R.merge(base(s), {
  marginLeft: s >= 16 ? 0 : '0.75rem'
});

const containerStyles = (width) => ({
  margin: width < 550 ? '0 auto' : 0,
  justifyContent: width <= 550 ? 'space-between' : 'inherit'
});

const toolbarStyles = (width) => ({
  backgroundColor: width < 550 ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
  paddingLeft: width < 550 ? '1rem' : '2rem',
  paddingRight: width < 550 ? '1rem' : '2rem'
});

export function getStyles(width) {
  const s = getSize(width);

  return {
    squareStyles: squareStyles(s),
    containerStyles: containerStyles(width),
    toolbarStyles: toolbarStyles(width)
  };
}
