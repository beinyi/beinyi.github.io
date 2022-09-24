import {CreateDate} from "./createDate"

export const AmountDaysOfMonth = (monthIndex: number, year: number) =>
    new Date(year, monthIndex + 1, 0).getDate();

export function CreateMonth(d?: Date) {
    const monthIndex = d?.getMonth() ?? new Date().getMonth();
    const year = d?.getFullYear() ?? new Date().getFullYear();

    const lastDays = [];
    const nextDays = [];
    const days = [];

    const getDay = (d: number, isCurrentMonth: boolean) => {
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

    const daysForRender = [...lastDays, ...days, ...nextDays];

    return (
        {
            days,
            daysForRender,

        }
    )
}