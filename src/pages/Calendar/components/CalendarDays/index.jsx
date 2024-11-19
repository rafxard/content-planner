import React from 'react'
import cn from 'classnames'
import styles from './index.module.scss'

const CalendarDays = (props) => {
    const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    const currentDays = []

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay))
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
            date: (new Date(firstDayOfMonth)),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
            year: firstDayOfMonth.getFullYear()
        }

        currentDays.push(calendarDay)
    }



    return (
        <div className={styles.content}>
            {currentDays.map((day, index) => (
                <div onClick={() => {
                    props.onChange(day)
                }} className={cn(styles.content_day, day.currentMonth && styles.current, day.selected && styles.selected)} key={`day-${index + 1}`}>
                    <div className={styles.date} >
                        {day.number}


                    </div>
                    <div className={styles.content_list}>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CalendarDays