const monthLength = 20;
const yearLength = monthLength * 16;

export class CalendarDate {
    year: number;
    month: number;
    day: number;
    offset: number;

    constructor(year: number, month?: number, day?: number){
        if(month !== undefined && day !== undefined){
          this.year = year;
          this.month = month;
          this.day = day;

          this.offset = this.getDateOffset(this.year, this.month, this.day);
          return this;
        }

        let date = CalendarDate.getDateTuple(year);
        this.year = date.year;
        this.month = date.month;
        this.day = date.day;
        this.offset = this.getDateOffset(this.year, this.month, this.day);
    }

    getDateOffset(year: number, month: number, day: number){
        let offset = year * yearLength;
        offset += month * monthLength;
        offset += day;
        return offset;
    }

    private static getDateTuple(offset: number): {year: number, month: number, day: number } {
        let working = offset;
        let year = Math.floor(working / yearLength);
        working -=  year * yearLength;
        let month = Math.floor(working / monthLength);
        let day = working - (month * monthLength);
        return {year: year, month: month, day: day };
    }
}
