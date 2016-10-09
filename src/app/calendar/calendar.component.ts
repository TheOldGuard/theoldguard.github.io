import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Month } from './month';
import { MonthService } from './month.service';

import './calendar.component.scss';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    providers: [ MonthService ]
})
export class CalendarComponent implements OnInit {
    months: Month[];
    offset: number;
    age = 'Age of Chains';
    year: number;

    constructor(
        private monthService: MonthService,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.offset = +params['offset'];
            this.months = this.monthService.getMonths(this.offset);
            this.year = this.months[0].startDate.year;
        });
    }
}
