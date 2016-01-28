import oam1 from '../audio/OAM_1.mp3';
import oam1Circ from '../audio/OAM_1_circ.mp3';
import oam1Sq from '../audio/OAM_1_sq.mp3';
import oam1Tri from '../audio/OAM_1_tri.mp3';

import oam2 from '../audio/OAM_2.mp3';
import oam2Circ from '../audio/OAM_2_circ.mp3';
import oam2Sq from '../audio/OAM_2_sq.mp3';
import oam2Tri from '../audio/OAM_2_tri.mp3';

import oam3 from '../audio/OAM_3.mp3';
import oam3Circ from '../audio/OAM_3_circ.mp3';
import oam3Sq from '../audio/OAM_3_sq.mp3';
import oam3Tri from '../audio/OAM_3_tri.mp3';

import oam4 from '../audio/OAM_4.mp3';
import oam4Circ from '../audio/OAM_4_circ.mp3';
import oam4Sq from '../audio/OAM_4_sq.mp3';
import oam4Tri from '../audio/OAM_4_tri.mp3';


const Sounds = {
  JAZZY: {
    base: new Audio(oam1),
    circle: new Audio(oam1Circ),
    triangle: new Audio(oam1Sq),
    square: new Audio(oam1Tri)
  },
  AWAKE: {
    base: new Audio(oam2),
    circle: new Audio(oam2Circ),
    triangle: new Audio(oam2Sq),
    square: new Audio(oam2Tri)
  },
  SLEEPY: {
    base: new Audio(oam3),
    circle: new Audio(oam3Circ),
    triangle: new Audio(oam3Sq),
    square: new Audio(oam3Tri)
  },
  ZEN: {
    base: new Audio(oam4),
    circle: new Audio(oam4Circ),
    triangle: new Audio(oam4Sq),
    square: new Audio(oam4Tri)
  }
};

export default Sounds;
