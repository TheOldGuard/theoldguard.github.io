import { Component, Input } from '@angular/core';

import { Age } from './age';

@Component({
    selector: 'timeline-age',
    templateUrl: './age.component.html'
})
export class AgeComponent {
    @Input() age: Age;
    title: string = 'Snap!';

    logIt(age: Age){
        console.log(age);
    }
}
