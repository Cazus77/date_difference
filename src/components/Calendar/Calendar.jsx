import React from "react";
import "./Calendar.css";
import * as calendar from "./index";
import classnames from "classnames";
import { logDOM } from "@testing-library/react";

function Calendar({
  year,
  monthText,
  weekDayNames,
  handleDayClick,
  monthData,
  currentDate,
  fromDate,
  beforeDate,
  inputValue,
}) {
  // {
  //   calendar.getMonthData(2022, 0).map((week) => {
  //     //console.log(week);
  //     week.map((day) => {
  //       console.log(day);
  //     });
  //   });
  // }
  //console.log(monthData);

  return (
    <div className="calendar">
      <header className="header">
        <span className="month">{monthText}</span>{" "}
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
                    today: calendar.areEqual(date, currentDate),
                    selected:
                      calendar.areEqual(date, fromDate) ||
                      calendar.areEqual(date, beforeDate) ||
                      calendar.areEqual(date, inputValue),
                  })}
                  onClick={(event) => handleDayClick(event, date)}
                >
                  {date.getDate()}
                </li>
              ) : (
                <li key={index} className="noday">
                  {0}
                </li>
              )
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
