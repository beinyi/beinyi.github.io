import {useState} from "react";
import {CreateDate, DateInfo} from "../../utils/createDate";
import {CreateMonth, Day} from "../../utils/createMonth";
import {setSelectedDate} from "../../features/generalSlice";
import {useAppDispatch} from "../../hook";

function useCalendar() {
    const [selectedMonth, setSelectedMonth] = useState(CreateDate().month);
    const [selectedYear, setSelectedYear] = useState(CreateDate().year);
    const [selectedDay, setSelectedDay] = useState(CreateDate().day)
    const [isSelectActive, setSelectActive] = useState(false);
    const dispatch = useAppDispatch();

    const getDayNames = (): Array<string> => {
        const dayNames = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        return (dayNames);
    }

    const getDaysForRender = (): Array<Day> => {
        return (CreateMonth(new Date(selectedYear, selectedMonth.monthIndex)).daysForRender)
    }

    const activateSelect = (): void => {
        setSelectActive(!isSelectActive);
    }

    const onSelectMonth = (e: any): void => {
        setSelectedMonth(CreateDate(new Date(selectedYear, e.target.dataset.key)).month);
        setSelectActive(!isSelectActive);
        dispatch(setSelectedDate(CreateDate(new Date(selectedYear, e.target.dataset.key, selectedDay.dayOfMonth))));
    }

    const onSelectDay = (e: any): void => {
        setSelectedDay(CreateDate(new Date(selectedYear, selectedMonth.monthIndex, e.target.dataset.key)).day)
        dispatch(setSelectedDate(CreateDate(new Date(selectedYear, selectedMonth.monthIndex, e.target.dataset.key))));
    }

    const onLastYear = (): void => {
        dispatch(setSelectedDate(CreateDate(new Date(selectedYear-1, selectedMonth.monthIndex, selectedDay.dayOfMonth))))
        setSelectedYear(selectedYear - 1);
    }

    const onNextYear = (): void => {
        dispatch(setSelectedDate(CreateDate(new Date(selectedYear+1, selectedMonth.monthIndex, selectedDay.dayOfMonth))))
        setSelectedYear(selectedYear + 1);
    }

    const getDateInfo = (): DateInfo => {
        return {
            date: new Date(selectedYear, selectedMonth.monthIndex, selectedDay.dayOfMonth),
            year: selectedYear,
            month:
                {
                    monthName: selectedMonth.monthName,
                    monthNumber: selectedMonth.monthNumber,
                    monthIndex: selectedMonth.monthIndex,
                },
            day: {
                dayName: selectedDay.dayName,
                dayOfWeek: selectedDay.dayOfWeek,
                dayOfMonth: selectedDay.dayOfMonth,
            }
        }
    }

    return (
        {
            functions:
                {
                    activateSelect,
                    getDayNames,
                    getDaysForRender,
                    onSelectMonth,
                    onSelectDay,
                    onLastYear,
                    onNextYear,
                    getDateInfo
                },
            state:
                {
                    selectedDay,
                    selectedMonth,
                    selectedYear,
                    isSelectActive
                }
        }
    )


}

export default useCalendar;