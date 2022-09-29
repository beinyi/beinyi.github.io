import {CreateMonth, MonthDays} from "./createMonth";

export function CreateYear(d?: Date) {
    const year = d?.getFullYear() ?? new Date().getFullYear();

    const months = [];

    const getMonth = (year:number ,monthIndex:number): MonthDays => CreateMonth(new Date(year, monthIndex));

    for (let i:number = 0; i <= 12 - 1; i++){
        months[i] = getMonth(year, i);
    }

    return(
        {
            months,
            getMonth
        }
    )
}