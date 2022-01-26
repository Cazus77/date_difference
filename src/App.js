import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

import DateDifferenceContainer from "./components/DateDifference/DateDifferenceContainer";
import CalendarContainer from "./components/Calendar/CalendarContainer";
import NextMonthButtonContainer from "./components/NextMounthButton/NextMonthButtonContainer";
import PrevMonthButtonContainer from "./components/PrevMounthButton/PrevMonthButtonContainer";

function App() {
  const date = useSelector((state) => state.fromReducer.date);

  const [data, setData] = useState(date);

  const year = data.getFullYear();
  const month = data.getMonth();

  return (
    <div className="block">
      <h1 className="description">Разность дат по календарю</h1>
      <DateDifferenceContainer />
      <div className="block__calendar">
        <PrevMonthButtonContainer year={year} month={month} setData={setData} />
        <CalendarContainer data={data} />
        <NextMonthButtonContainer year={year} month={month} setData={setData} />
      </div>
    </div>
  );
}

export default App;
