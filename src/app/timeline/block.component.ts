import {Component, Input, HostListener, ElementRef } from '@angular/core';

import { Block } from './block';

@Component({
    selector: 'timeline-block',
    templateUrl: './block.component.html'
})
export class BlockComponent {
    @Input() block: Block;
    shown: boolean = false;
    $el: any;

    constructor(private element: ElementRef){
        this.$el = element.nativeElement;
    }

    getClasses(isImg: boolean): {'is-hidden': boolean, 'bounce-in': boolean} {
        let classes = {'is-hidden': !this.shown, 'bounce-in': this.shown};
        if(isImg){
          classes[this.block.type] = true;
        }
        return classes;
    }

    handleScroll(scrollOffset: number): void{
        if(this.shown){
            return;
        }
        let self = this;

        if(scrollOffset >= this.$el.offsetTop){
            self.shown = true;
        }
    }

}
