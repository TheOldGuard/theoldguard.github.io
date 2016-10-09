import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalendarComponent } from './calendar.component';
import { CalendarMonthComponent } from './calendar-month.component';
import { CalendarDayComponent } from './calendar-day.component';
import { MoonComponent } from './moon.component';

import { routing } from './calendar.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        CalendarComponent,
        CalendarMonthComponent,
        CalendarDayComponent,
        MoonComponent
    ]
})
export class CalendarModule {
    title = 'Calendar';
}
