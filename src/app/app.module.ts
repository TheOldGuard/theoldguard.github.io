import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import '../../public/css/styles.scss';

import { AppComponent }  from './app.component';
import { IndexComponent } from './index.component';

import { routing } from './app.routing';

import { TimelineModule } from './timeline/timeline.module';
import { CalendarModule } from './calendar/calendar.module';

import './rxjs-extensions';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,

        TimelineModule,
        CalendarModule
    ],
    declarations: [
        AppComponent,
        IndexComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
