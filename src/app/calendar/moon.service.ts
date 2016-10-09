import { Injectable } from '@angular/core';

import { MoonOptions, Moon } from './moon';

const feraOptions: MoonOptions = {
    spritePos: [
      -32 * 0, -32 * 1, -32 * 3, -32 * 4, -32 * 6, -32 * 8, -32 * 9, -32 * 11,
      -32 * 12, -32 * 13, -32 * 14, -32 * 15, -32 * 16, -32 * 17, -32 * 18, -32 * 19,
      -32 * 20, -32 * 22, -32 * 24, -32 * 25, -32 * 27, -32 * 28, -32 * 29, -32 * 30
    ],
    offset: 14,
    length: 24,
    spriteUrl: '/public/images/fera.png'
};

const orinOptions: MoonOptions = {
    spritePos: [
      -32 * 0, -32 * 1, -32 * 3, -32 * 4, -32 * 5, -32 * 6, -32 * 8,
      -32 * 9, -32 * 10, -32 * 11, -32 * 12, -32 * 13, -32 * 14, -32 * 15,
      -32 * 16, -32 * 17, -32 * 18, -32 * 19, -32 * 20, -32 * 21, -32 * 22,
      -32 * 24, -32 * 25, -32 * 26, -32 * 27, -32 * 28, -32 * 29, -32 * 30
    ],
    offset: 0,
    length: 28,
    spriteUrl: '/public/images/orin.png'
};

export class Moons {
    fera: Moon;
    orin: Moon;
}

@Injectable()
export class MoonService {
    private fera: Moon = new Moon(feraOptions);
    private orin: Moon = new Moon(orinOptions);

    getMoons(): Moons {
        return {
            fera: this.fera,
            orin: this.orin
        }
    }
}
