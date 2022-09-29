import {CreateDate} from "./createDate"

export type Day = {
    dayOfWeek: number,
    dayOfMonth: number,
    monthNumber: number,
    isCurrentMonth: boolean
}

export type MonthDays = {
    days: Array<Day>,
    daysForRender: Array<Day>
}

const AmountDaysOfMonth = (monthIndex: number, year: number): number =>
    new Date(year, monthIndex + 1, 0).getDate();

export function CreateMonth(d?: Date): MonthDays {
    const monthIndex = d?.getMonth() ?? new Date().getMonth();
    const year = d?.getFullYear() ?? new Date().getFullYear();

    const lastDays: Array<Day> = [];
    const nextDays: Array<Day> = [];
    const days: Array<Day> = [];

    const getDay = (d: number, isCurrentMonth: boolean): Day => {
        const {dayOfWeek, dayOfMonth} = CreateDate(new Date(year, monthIndex, d)).day;
        const monthNumber = CreateDate(new Date(year, monthIndex, d)).month.monthNumber;
        return (
            {
                dayOfWeek,
                dayOfMonth,
                monthNumber,
                isCurrentMonth
            }
        )
    }

    for (let i: number = 0; i <= AmountDaysOfMonth(monthIndex, year) - 1; i++) {
        days[i] = getDay(i + 1, true);
    }

    if (days[0].dayOfWeek !== 0) {
        for (let i: number = 0 - days[0].dayOfWeek; i < 0; i++) {
            lastDays[i + days[0].dayOfWeek] = getDay(i + 1, false);
        }
    }


    if (days[days.length-1].dayOfWeek !== 6) {
        for (let i: number = days[days.length-1].dayOfMonth;
             i < days[days.length-1].dayOfMonth + (6 - days[days.length-1].dayOfWeek); i++) {
            nextDays[i - days[days.length-1].dayOfMonth] = getDay(i + 1, false);
        }
    }

    const daysForRender: Array<Day> = [...lastDays, ...days, ...nextDays];

    return (
        {
            days,
            daysForRender
        }
    )
}