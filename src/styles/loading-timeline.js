import TweenLite from 'gsap';

export const t1 = 0.8;
export const t2 = 0.8;
export const t3 = 0.6;

const timeline = new TimelineLite()
                      .delay(1)
                      .addLabel('phase-1')
                      .addLabel('phase-2', t1)
                      .addLabel('phase-3', 1.4);

export default timeline;
