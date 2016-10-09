import { Component, Input, OnInit } from '@angular/core';

import { Moon } from './moon';
import { MoonService } from './moon.service';

import './calendar-day.component.scss';

@Component({
    selector: 'calendar-day',
    templateUrl: './calendar-day.component.html',
    providers: [ MoonService ]
})
export class CalendarDayComponent implements OnInit {
    @Input() offset: number;
    @Input() today: number;
    @Input() day: number;
    private fera: Moon;
    private orin: Moon;

    constructor(private moonService: MoonService){}

    ngOnInit(): void {
        const moons = this.moonService.getMoons();
        this.fera = moons.fera;
        this.orin = moons.orin;
    }
}
