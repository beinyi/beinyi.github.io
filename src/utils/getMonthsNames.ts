import {CreateDate} from "./createDate";

export type MonthName = {
    monthNumber: number,
    monthName: string,
    monthIndex: number
}

export function getMonthsNames(): Array<MonthName> {
    const date = new Date();

    const monthsNames: Array<MonthName> = Array.from({ length: 12 });

    monthsNames.forEach((_, i) => {
        const {monthNumber, monthName, monthIndex} = CreateDate(new Date(date.getFullYear(),
                date.getMonth()+i, 1)).month;
        monthsNames[monthIndex] = {monthNumber, monthName, monthIndex}

    })

    return(monthsNames)
}