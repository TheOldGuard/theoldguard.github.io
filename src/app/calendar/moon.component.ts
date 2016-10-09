import { Component, Input } from '@angular/core';

import { Moon } from './moon';
import './moon.component.scss';

@Component({
    selector: 'calendar-moon',
    templateUrl: './moon.component.html'
})
export class MoonComponent {
    @Input() moon: Moon;
    @Input() offset: number;
}
