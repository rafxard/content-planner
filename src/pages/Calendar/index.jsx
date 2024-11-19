import React, { useState } from 'react'

import styles from './index.module.scss'
import CalendarDays from './components/CalendarDays';
import { GrClose } from 'react-icons/gr';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Calendar = () => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [currentDate, setCurrentDate] = useState(new Date());
    const [isOpenContent, setIsOpenContent] = useState(false)

    const onChangeDate = (day) => {
        setIsOpenContent(true)
    }

    const onClickPrev = () => {
        const newDate = new Date(currentDate)
        newDate.setMonth((newDate.getMonth() - 1))

        setCurrentDate(newDate)
    }

    const onClickNext = () => {
        const newDate = new Date(currentDate)
        newDate.setMonth((newDate.getMonth() + 1))

        setCurrentDate(newDate)
    }

    return (
        <>
            <div className={styles.calendar}>
                <div className={styles.calendar_header}>
                    <div className={styles.title}>
                        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </div>
                    <div className={styles.tools}>
                        <BiChevronLeft className={styles.prev_next} onClick={onClickPrev} />
                        {`${months[currentDate.getMonth()].substring(0, 3)} ${currentDate.getDate()}`}
                        <BiChevronRight className={styles.prev_next} onClick={onClickNext} />
                    </div>
                </div>
                <div className={styles.calendar_body}>
                    <div className={styles.calendar_body_header}>
                        {weekDays.map((week, index) => (
                            <div className={styles.weekday} key={`week-${index}`}>{week}</div>
                        ))}
                    </div>
                    <CalendarDays day={currentDate} onChange={onChangeDate} />
                </div>
            </div>
            {isOpenContent && <div className={styles.content_input}>
                <div className={styles.backdrop} onClick={() => {
                    setIsOpenContent(false)
                }}></div>
                <div className={styles.form}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            Add Content
                        </div>
                        <GrClose className={styles.close} onClick={() => {
                            setIsOpenContent(false)
                        }} />
                    </div>
                    <div className={styles.body}>
                        <textarea rows={10} placeholder='Add your event'></textarea>
                    </div>
                    <div className={styles.footer}>
                        <button>Submit</button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Calendar