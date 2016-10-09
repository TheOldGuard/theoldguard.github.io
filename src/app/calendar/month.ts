import { CalendarDate } from './calendar-date';
import { Season } from './season';

const BASE_ARR = [0, 1, 2, 3, 4];

export class Month {
    name: string;
    private season: Season;
    startDate: CalendarDate;

    weeks: number[][] = [
        BASE_ARR.map(( x:any, i:number ) => i+1 ),
        BASE_ARR.map(( x:any, i:number ) => i+1+5 ),
        BASE_ARR.map(( x:any, i:number ) => i+1+10 ),
        BASE_ARR.map(( x:any, i:number ) => i+1+15 )
    ];

    constructor(name: string, season: Season, startDate: CalendarDate){
        this.name = name;
        this.season = season;
        this.startDate = startDate;
    }

    getTitleColor(): string {
        return this.season.color;
    }

    getDayOffset(day: number){
        return this.startDate.offset + day - 1;
    }
}
