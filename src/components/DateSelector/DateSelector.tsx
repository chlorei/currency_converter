import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from './DateSelector.module.css'

const DateSelector = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className={s.selector}>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </div>
    )
}

export default DateSelector
