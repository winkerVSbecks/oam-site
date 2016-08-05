import { Howl } from 'howler';

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
    base: new Howl({ src: [oam1] }),
    circle: new Howl({ src: [oam1Circ] }),
    triangle: new Howl({ src: [oam1Sq] }),
    square: new Howl({ src: [oam1Tri] })
  },
  AWAKE: {
    base: new Howl({ src: [oam2] }),
    circle: new Howl({ src: [oam2Circ] }),
    triangle: new Howl({ src: [oam2Sq] }),
    square: new Howl({ src: [oam2Tri] })
  },
  SLEEPY: {
    base: new Howl({ src: [oam3] }),
    circle: new Howl({ src: [oam3Circ] }),
    triangle: new Howl({ src: [oam3Sq] }),
    square: new Howl({ src: [oam3Tri] })
  },
  ZEN: {
    base: new Howl({ src: [oam4] }),
    circle: new Howl({ src: [oam4Circ] }),
    triangle: new Howl({ src: [oam4Sq] }),
    square: new Howl({ src: [oam4Tri] })
  }
};

export default Sounds;
