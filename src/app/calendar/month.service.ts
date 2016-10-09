import { Injectable } from '@angular/core';

import { Season } from './season';
import { Month } from './month';
import { CalendarDate } from './calendar-date';

const MONTH_LENGTH = 20;

const SEASONS = [
    new Season('#7fcf83'),
    new Season('#e0a173'),
    new Season('#b6dc8b'),
    new Season('#8fe6e7')
];

const MONTH_CONFIGS = [
    {name: 'First Glidda',   season: 0},
    {name: 'Second Glidda',  season: 0},
    {name: 'First Boro',     season: 0},
    {name: 'Second Boro',    season: 0},

    {name: 'First Caena',    season: 1},
    {name: 'Second Caena',   season: 1},
    {name: 'First Orannil',  season: 1},
    {name: 'First Dagnis',   season: 1},

    {name: 'Second Dagnis',  season: 2},
    {name: 'First Uldin',    season: 2},
    {name: 'Second Uldin',   season: 2},
    {name: 'Second Orannil', season: 2},

    {name: 'First Azren',    season: 3},
    {name: 'Second Azren',   season: 3},
    {name: 'First Otan',     season: 3},
    {name: 'Second Otan',    season: 3}
]

@Injectable()
export class MonthService {
    getMonths(offset: number): Month[]{
        let firstOfTheYear = new CalendarDate(offset);
        let firstOffset = firstOfTheYear.getDateOffset(firstOfTheYear.year, 0, 0);
        return MONTH_CONFIGS.map((month,i) => {
            // console.log(i*MONTH_LENGTH, new CalendarDate(i*MONTH_LENGTH));
            return new Month(month.name,
                             SEASONS[month.season],
                             new CalendarDate(firstOffset + (i * MONTH_LENGTH) ));
        });
    }
}
