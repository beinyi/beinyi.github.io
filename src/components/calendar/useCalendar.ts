import {useEffect, useState} from "react";
import {CreateDate, DateInfo} from "../../utils/createDate";
import {CreateMonth, Day} from "../../utils/createMonth";
import {setSelectedDate} from "../../features/generalSlice";
import {useAppDispatch, useAppSelector} from "../../hook";

function useCalendar() {
    const [selectedMonth, setSelectedMonth] = useState(useAppSelector(state => state.general.selectedDate.month));
    const [selectedYear, setSelectedYear] = useState(useAppSelector(state => state.general.selectedDate).year);
    const [selectedDay, setSelectedDay] = useState(useAppSelector(state => state.general.selectedDate).day)
    const [isSelectActive, setSelectActive] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(setSelectedDate(getDateInfo()));
        console.log(getDateInfo().dateString)
    }, [selectedMonth, selectedYear, selectedDay])

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
    }

    const onSelectDay = (e: any): void => {
        setSelectedDay(CreateDate(new Date(selectedYear, selectedMonth.monthIndex, e.target.dataset.key)).day)
    }

    const onLastYear = (): void => {
        setSelectedYear(selectedYear - 1);
    }

    const onNextYear = (): void => {
        setSelectedYear(selectedYear + 1);
    }

    const getDateInfo = (): DateInfo => {
        const dateString = new Date(selectedYear, selectedMonth.monthIndex, selectedDay.dayOfMonth).toString();
        return {
            dateString: dateString,
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