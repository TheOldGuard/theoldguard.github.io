import { Component, OnInit } from '@angular/core';

import { Age } from './age';
import { TimelineService } from './timeline.service';

@Component({
    selector: 'timeline',
    templateUrl: './timeline.component.html'
})
export class TimelineComponent implements OnInit {
    private ages: Age[];
    constructor(private timelineService: TimelineService ){}

    ngOnInit(): void {
        this.timelineService.getAges()
            .then(ages => this.ages = ages);
    }
}
