import style from "./calendar.module.css";
import useCalendar from "./useCalendar";
import {getMonthsNames} from "../../utils/getMonthsNames";
import React from "react";

export function Calendar() {

    const {state, functions} = useCalendar();

    return (
        <div className={style.container}>

            <div className={style.year}>
                <div className={style.yearButton} onClick={() =>
                    functions.onLastYear()}>[-]
                </div>
                <div>{state.selectedYear}</div>
                <div className={style.yearButton} onClick={() =>
                    functions.onNextYear()}>[+]
                </div>
            </div>

            <div className={style.selectMonthContainer}>
                <div className={state.isSelectActive? style.selectMonthHeaderActive : style.selectMonthHeader} onClick={() => functions.activateSelect()}>
                    {state.selectedMonth.monthName}
                </div>
                {state.isSelectActive && <div className={style.selectMonthMenu}>
                    {getMonthsNames().map((month): any =>
                        <div className={style.selectMonthOption} key={month.monthIndex}
                             data-key={month.monthIndex}
                             onClick={(e) =>
                                 functions.onSelectMonth(e)}>{month.monthName}</div>)}
                </div>}
            </div>

            <div className={style.header}>
                {functions.getDayNames().map(dayName =>
                    <div key={dayName}>{dayName}</div>
                )}
            </div>

            <div className={style.body}>
                {functions.getDaysForRender().map((day): any =>
                    <div className={day.isCurrentMonth ?
                        day.dayOfMonth===state.selectedDay.dayOfMonth ?
                            style.activeDay
                            : style.day
                        : style.notCurrentDay}
                         key={`${day.monthNumber}-${day.dayOfMonth}`}
                         data-key={day.dayOfMonth}
                    onClick={(e) => functions.onSelectDay(e)}>{day.dayOfMonth}</div>)
                }
            </div>

        </div>
    )
}