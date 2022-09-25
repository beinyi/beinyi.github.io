import style from './Header.module.css'
import {useState} from "react";
import Calendar from "./calendar/calendar";
import {useAppSelector} from "../hook";

export function Header() {

    const [isCalendarActive, setCalendarActive] = useState(false);
    const selectedDate = useAppSelector(state => state.general.selectedDate);

    const activateCalendar = () => {
        setCalendarActive(!isCalendarActive);
    }

    const calendarRender = (isActive: boolean) => {
        if (isActive) {
            return (
                <div>
                    <Calendar/>
                </div>
            )
        }
    }

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <div>
                    <div>███████╗███╗░░██╗████████╗██████╗░░█████╗░██████╗░██╗░░░██╗</div>
                    <div>██╔════╝████╗░██║╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗╚██╗░██╔╝</div>
                    <div>█████╗░░██╔██╗██║░░░██║░░░██████╔╝██║░░██║██████╔╝░╚████╔╝░</div>
                    <div>██╔══╝░░██║╚████║░░░██║░░░██╔══██╗██║░░██║██╔═══╝░░░╚██╔╝░░</div>
                    <div>███████╗██║░╚███║░░░██║░░░██║░░██║╚█████╔╝██║░░░░░░░░██║░░░</div>
                    <div>╚══════╝╚═╝░░╚══╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░░░░╚═╝░░░</div>
                </div>
                <div>
                    <div>██████╗░███████╗░██████╗███████╗████████╗</div>
                    <div>██╔══██╗██╔════╝██╔════╝██╔════╝╚══██╔══╝</div>
                    <div>██████╔╝█████╗░░╚█████╗░█████╗░░░░░██║░░░</div>
                    <div>██╔══██╗██╔══╝░░░╚═══██╗██╔══╝░░░░░██║░░░</div>
                    <div>██║░░██║███████╗██████╔╝███████╗░░░██║░░░</div>
                    <div>╚═╝░░╚═╝╚══════╝╚═════╝░╚══════╝░░░╚═╝░░░</div>
                </div>
                < div>
                    <div>███╗░░██╗░█████╗░████████╗███████╗</div>
                    <div>████╗░██║██╔══██╗╚══██╔══╝██╔════╝</div>
                    <div>██╔██╗██║██║░░██║░░░██║░░░█████╗░░</div>
                    <div>██║╚████║██║░░██║░░░██║░░░██╔══╝░░</div>
                    <div>██║░╚███║╚█████╔╝░░░██║░░░███████╗</div>
                    <div>╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░╚══════╝</div>
                </div>
            </div>

            <div className={style.calendar}>
                <div className={style.calendarButton}
                     onClick={() => activateCalendar()}>{`${selectedDate.day.dayOfMonth} 
                    ${selectedDate.month.monthName} ${selectedDate.year}`}</div>
                {(calendarRender(isCalendarActive))}
            </div>
        </header>
    );

}