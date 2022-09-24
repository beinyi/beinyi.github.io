import {CreateDate} from "./createDate";

export function getMonthsNames() {
    const date = new Date();

    const monthsNames: {
        monthNumber: number;
        monthName: string;
        monthIndex: number;
    }[] = Array.from({ length: 12 });

    monthsNames.forEach((_, i) => {
        const {monthNumber, monthName, monthIndex} = CreateDate(new Date(date.getFullYear(),
                date.getMonth()+i, 1)).month;
        monthsNames[monthIndex] = {monthNumber, monthName, monthIndex}

    })

    return(monthsNames)
}