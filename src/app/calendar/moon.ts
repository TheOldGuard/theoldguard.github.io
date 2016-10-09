export class MoonOptions {
    spritePos: number[];
    offset: number;
    length: number;
    spriteUrl: string;
}

export class Moon {
    private spritePos: number[];
    private offset: number;
    private length: number;
    private spriteUrl: string;

    private initialized: boolean = false;

    constructor(options: MoonOptions){
        this.spritePos = options.spritePos;
        this.offset = options.offset;
        this.length = options.length;
        this.spriteUrl = options.spriteUrl;

        this.initialized = true;
    }

    getSpriteOffset(offset: number): string {
        if(!this.initialized){
          console.log('not initialized');
            return '0px 0px';
        }
        let position =  (offset + this.offset) % this.length;
        let spriteOffset = this.spritePos[position] + 'px 0px';
        return spriteOffset;
    }

    getSpriteUrl(): string {
        return this.spriteUrl;
    }
}
