import React from "react";
import "./Calendar.css";
import * as calendar from "./CalendarFunction";
import classnames from "classnames";

function Calendar({
  year,
  month,
  monthText,
  weekDayNames,
  handleDayClick,
  monthData,
  currentDate,
  fromDate,
  beforeDate,
  inputValue,
}) {
  return (
    <div className="calendar">
      <header className="header">
        <span className="month">{monthText}</span>
        <span className="year">{year}</span>
      </header>

      <div className="wrapper">
        <ul className="weekdays">
          {weekDayNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        {monthData.map((week, index) => (
          <ul key={index} className="days">
            {week.map((date, index) =>
              date ? (
                <li
                  key={index}
                  className={classnames("day", {
                    day_not_month: date.getMonth() !== month,
                    today: calendar.areEqual(date, currentDate),
                    selected:
                      (calendar.areEqual(date, fromDate) &&
                        date.getMonth() === month) ||
                      (calendar.areEqual(date, beforeDate) &&
                        date.getMonth() === month) ||
                      calendar.areEqual(date, inputValue),
                  })}
                  onClick={(event) => handleDayClick(event, date)}
                >
                  {date.getDate()}
                </li>
              ) : (
                <li key={index} className="day" />
              )
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
