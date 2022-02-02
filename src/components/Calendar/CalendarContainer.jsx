import React from "react";
import * as calendar from "./CalendarFunction";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from "react-redux";
import {
  SELECT_FROM_DATA,
  DELETE_FROM_DATA,
  SELECT_BEFORE_DATA,
  DELETE_BEFORE_DATA,
} from "../../store/action/actions";

export default function CalendarContainer({ data }) {
  const dispatch = useDispatch();
  const fromDate = useSelector((state) => state.fromReducer.selectedFromDate);
  const beforeDate = useSelector(
    (state) => state.beforeReducer.selectedBeforeDate
  );

  const inputValue = useSelector((state) => state.inputValueReducer.inputValue);
  const currentDate = useSelector((state) => state.fromReducer.currentDate);
  const monthNames = useSelector((state) => state.fromReducer.monthNames);
  const weekDayNames = useSelector((state) => state.fromReducer.weekDayNames);

  const year = data.getFullYear();
  const month = data.getMonth();

  const handleDayClick = (event, date) => {
    let classNameSelect = event.target.className;

    if (!fromDate && classNameSelect !== "day selected") {
      dispatch({ type: SELECT_FROM_DATA, payload: date });
    } else if (
      calendar.areEqual(date, fromDate) &&
      classNameSelect === "day selected"
    ) {
      console.log(beforeDate);
      dispatch({ type: DELETE_FROM_DATA, payload: null });
    } else if (fromDate && !beforeDate) {
      dispatch({ type: SELECT_BEFORE_DATA, payload: date });
    } else if (
      calendar.areEqual(date, beforeDate) &&
      classNameSelect === "day selected"
    ) {
      dispatch({ type: DELETE_BEFORE_DATA, payload: null });
    }
  };

  return (
    <>
      <Calendar
        year={calendar.yearText(year, month - 1)}
        month={calendar.monthNum(month - 1)}
        monthText={calendar.monthText(month - 1, monthNames)}
        monthData={calendar.getMonthData(year, month - 1)}
        weekDayNames={weekDayNames}
        handleDayClick={handleDayClick}
        fromDate={fromDate}
        beforeDate={beforeDate}
        inputValue={inputValue}
      />
      <Calendar
        year={year}
        month={calendar.monthNum(month)}
        monthText={monthNames[month]}
        monthData={calendar.getMonthData(year, month)}
        currentDate={currentDate}
        weekDayNames={weekDayNames}
        handleDayClick={handleDayClick}
        fromDate={fromDate}
        beforeDate={beforeDate}
        inputValue={inputValue}
      />
      <Calendar
        year={calendar.yearText(year, month + 1)}
        month={calendar.monthNum(month + 1)}
        monthText={calendar.monthText(month + 1, monthNames)}
        monthData={calendar.getMonthData(year, month + 1)}
        weekDayNames={weekDayNames}
        handleDayClick={handleDayClick}
        fromDate={fromDate}
        beforeDate={beforeDate}
        inputValue={inputValue}
      />
    </>
  );
}
