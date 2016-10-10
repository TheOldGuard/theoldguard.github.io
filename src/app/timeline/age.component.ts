import { Component, Input, ViewChildren, QueryList, AfterViewInit, HostListener } from '@angular/core';

import { Age } from './age';

import { Observable } from 'rxjs/Observable';

import { BlockComponent } from './block.component.ts';

@Component({
    selector: 'timeline-age',
    templateUrl: './age.component.html'
})
export class AgeComponent implements AfterViewInit {
    @Input() age: Age;

    @ViewChildren( BlockComponent )
    private children: QueryList<BlockComponent>;

    private scrollEvents: Observable<any>;

    constructor(){
        this.scrollEvents = Observable.fromEvent(window, 'scroll');
        this.scrollEvents.subscribe(()=> this.handleScroll());
    }

    title: string = 'Snap!';

    logIt(age: Age){
        console.log(age);
    }

    getScrollOffset(): number {
        let doc = document.documentElement;
        let windowOffset = ( window.pageYOffset || doc.scrollTop ) - ( doc.clientTop || 0 );
        return windowOffset + (window.innerHeight * 0.5);
    }

    handleScroll(): void {
      window.requestAnimationFrame(() => {
        let offset = this.getScrollOffset();
        this.children.forEach((child: BlockComponent)=> {
            child.handleScroll(offset);
        });
      });
    }

    ngAfterViewInit(): void {
        this.handleScroll();
    }


}
