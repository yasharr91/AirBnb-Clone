'use client'

import { DateRange, Range, RangeKeyDict } from "react-date-range";

interface CalendarProps {
    value:Range;
    onChange : (value:RangeKeyDict)=>void
    disabledDates?:Date[]
}


const Calendar:React.FC<CalendarProps> = ({
    value,
    onChange,
    disabledDates
}) => {
    return ( 
        <DateRange/>
     );
}
 
export default Calendar;