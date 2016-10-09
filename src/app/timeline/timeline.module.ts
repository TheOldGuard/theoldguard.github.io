import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimelineComponent } from './timeline.component.ts';
import { AgeComponent } from './age.component.ts';
import { BlockComponent } from './block.component.ts';

import { TimelineService } from './timeline.service.ts';
import { routing } from './timeline.routing';

import './timeline.component.scss';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        TimelineComponent,
        AgeComponent,
        BlockComponent
    ],
    providers: [
        TimelineService
    ]
})
export class TimelineModule{
    title: string = 'Timeline';
}
