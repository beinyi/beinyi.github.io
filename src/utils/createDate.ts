
export function CreateDate(d?: Date) {
    const date = d ?? new Date();
    const locale = 'default';

    const dayName = date.toLocaleDateString(locale, {weekday: 'short'});
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const monthName = date.toLocaleDateString(locale, {month: "long"});
    const monthNumber = date.getMonth() + 1;
    const monthIndex = date.getMonth();
    const year = date.getFullYear();


    return (
        {
            date,
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