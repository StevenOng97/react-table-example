import React from 'react';
import ReactDatePicker from 'react-datepicker';
import myCalendar from './index';
import moment from 'moment';
import calendar from '../../assets/images/Common/calendar-2.png';

const DatePicker = ({ startDate, onChange, endDate }) => {
  const parseDate = (date) => {
    const dateFormat = moment(date).format('MMM Do YYYY');
    const isError = dateFormat === 'Invalid date';

    return isError ? '' : dateFormat;
  };

  return (
    <>
      <div className="date-container text-center mt-3 flex-wrap">
        <span className="text">
          <img src={calendar} alt="calendar-icon" className="me-2" />
          {parseDate(startDate)}
        </span>
        <span className="text">
          <img src={calendar} alt="calendar-icon" className="me-2" />
          {parseDate(endDate)}
        </span>
        <button
          className="btn btn-sm btn-wrapper btn-primary text-white"
          disabled={!(startDate && endDate)}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="w-100"></div>
      <div className="datepicker-container">
        <ReactDatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          selectsDisabledDaysInRange
          inline
          calendarContainer={myCalendar}
        />
      </div>
    </>
  );
};

export default DatePicker;
