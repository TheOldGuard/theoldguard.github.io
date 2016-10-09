import { Component, Input } from '@angular/core';

import { CalendarDate } from './calendar-date';
import { Month } from './month';

import './calendar-month.component.scss';

@Component({
    selector: 'calendar-month',
    templateUrl: './calendar-month.component.html'
})
export class CalendarMonthComponent {
    @Input() month: Month;
    @Input() today: number;
}
