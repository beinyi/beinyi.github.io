import {useState} from "react";
import {CreateDate} from "../../utils/createDate";
import {CreateMonth} from "../../utils/createMonth";


function useCalendar() {
    const [selectedMonth, setSelectedMonth] = useState(CreateDate().month);
    const [selectedYear, setSelectedYear] = useState(CreateDate().year);
    const [selectedDay, setSelectedDay] = useState(CreateDate().day)
    const [isSelectActive, setSelectActive] = useState(false);

    const getDayNames = () => {
        const dayNames = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        return (dayNames);
    }

    const getDaysForRender = () => {
        return (CreateMonth(new Date(selectedYear, selectedMonth.monthIndex)).daysForRender)
    }

    const activateSelect = () => {
        setSelectActive(!isSelectActive);
    }

    const onSelectMonth = (e: any) => {
        setSelectedMonth(CreateDate(new Date(selectedYear, e.target.dataset.key)).month);
        setSelectActive(!isSelectActive);
    }

    const onSelectDay = (e: any) => {
        setSelectedDay(CreateDate(new Date(selectedYear, selectedMonth.monthIndex, e.target.dataset.key)).day)
    }

    const onLastYear = () => {
        setSelectedYear(selectedYear - 1);
    }

    const onNextYear = () => {
        setSelectedYear(selectedYear + 1);
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
                    onNextYear
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