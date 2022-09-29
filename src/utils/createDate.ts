
export type DateInfo = {
    dateString: string,
    year: number,
    month: Month
    day: {
        dayName: string,
        dayOfWeek: number,
        dayOfMonth: number,
    }
}

export type Month = {
    monthName: string,
    monthNumber: number,
    monthIndex: number,
}

export function CreateDate(d?: Date): DateInfo {
    const date = d ?? new Date();
    const locale = 'default';

    const dayName = date.toLocaleDateString(locale, {weekday: 'short'});
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const monthName = date.toLocaleDateString(locale, {month: "long"});
    const monthNumber = date.getMonth() + 1;
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const dateString = date.toString();


    return (
        {
            dateString,
            year,
            month:
                {
                    monthName,
                    monthNumber,
                    monthIndex
                },
            day: {
                dayName,
                dayOfWeek,
                dayOfMonth
            }
        }
    )
}