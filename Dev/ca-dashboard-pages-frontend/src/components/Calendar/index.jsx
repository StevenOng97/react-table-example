import React from 'react';
import { CalendarContainer } from 'react-datepicker';
import './styles.scss';
const Calendar = ({ className, children }) => {
  return (
    <div className="calendar-wrapper">
      <CalendarContainer className={className}>{children}</CalendarContainer>
    </div>
  );
};

export default Calendar;
