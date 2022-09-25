import {CreateDate} from "./createDate"

export type Day = {
    dayOfWeek: number,
    dayOfMonth: number,
    monthNumber: number,
    isCurrentMonth: boolean
}

export type Month = {
    days: Array<Day>,
    daysForRender: Array<Day>
}

const AmountDaysOfMonth = (monthIndex: number, year: number): number =>
    new Date(year, monthIndex + 1, 0).getDate();

export function CreateMonth(d?: Date): Month {
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

    // @ts-ignore не даёт использовать at
    if (days.at(-1).dayOfWeek !== 6) {
        // @ts-ignore не даёт использовать at
        for (let i: number = days.at(-1).dayOfMonth; i < days.at(-1).dayOfMonth + (6 - days.at(-1).dayOfWeek); i++) {
            // @ts-ignore не даёт использовать at
            nextDays[i - days.at(-1).dayOfMonth] = getDay(i + 1, false);
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