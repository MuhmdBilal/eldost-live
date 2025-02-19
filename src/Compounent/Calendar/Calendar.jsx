import React, { useState } from 'react';
import moment from 'moment';

const Calendar = () => {
  const [month, setMonth] = useState(moment());
  const [selected, setSelected] = useState(moment().startOf('day'));

  const previous = () => {
    setMonth((prevMonth) => prevMonth.clone().subtract(1, 'month'));
  };

  const next = () => {
    setMonth((prevMonth) => prevMonth.clone().add(1, 'month'));
  };

  const select = (day) => {
    setSelected(day.date);
    setMonth(day.date.clone());
  };

  const renderWeeks = () => {
    let weeks = [];
    let done = false;
    let date = month.clone().startOf('month').add('w' - 1).day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    while (!done) {
      weeks.push(
        <div className="row week" key={date.toString()}>
          {renderDays(date.clone())}
        </div>
      );
      date.add(1, 'w');
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  const renderDays = (date) => {
    let days = [];

    for (let i = 0; i < 7; i++) {
      let day = {
        name: date.format('dd').substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), 'day'),
        date: date.clone()
      };

      days.push(
        <span
          key={date.toString()}
          className={
            `day${day.isToday ? ' today' : ''}${day.isCurrentMonth ? '' : ' different-month'}${day.date.isSame(selected) ? ' selected' : ''}`
          }
          onClick={() => select(day)}
        >
          {day.number}
        </span>
      );

      date.add(1, 'day');
    }

    return days;
  };

  const renderMonthLabel = () => {
    return <span className="month-label">{month.format('MMMM YYYY')}</span>;
  };

  const renderDayNames = () => {
    return (
      <div className=" day-names text-dark">
        <span className="day">Sun</span>
        <span className="day">Mon</span>
        <span className="day">Tue</span>
        <span className="day">Wed</span>
        <span className="day">Thu</span>
        <span className="day">Fri</span>
        <span className="day">Sat</span>
      </div>
    );
  };

  return (
    <section className="calendar">
      <header className="header">
        <div className="month-display d-flex  ">
          <button className='btn text-light fs-5' onClick={previous}> Back</button>
          {renderMonthLabel()}
          <button className='btn text-light fs-5' onClick={next}> Next</button>

        </div>
        {renderDayNames()}
      </header>
      {renderWeeks()}
    </section>
  );
};

export default Calendar;
