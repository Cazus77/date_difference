import React, { useState } from "react";
import { INPUT_NUMBER_DAYS } from "../../store/action/actions";
import DateDifference from "./DateDifference";
import { useDispatch, useSelector } from "react-redux";

export default function DateDifferenceContainer() {
  const dispatch = useDispatch();
  const fromDate = useSelector((state) => state.fromReducer.selectedFromDate);
  const beforeDate = useSelector(
    (state) => state.beforeReducer.selectedBeforeDate
  );
  const result =
    beforeDate && fromDate
      ? (beforeDate - fromDate) / (1000 * 60 * 60) / 24
      : "";

  const [value, setValue] = useState("");

  function handleInput(event) {
    setValue(event.target.value);
    let inputData = event.target.value * 24 * 60 * 60 * 1000;
    let beforeDates = new Date(+fromDate + inputData);
    dispatch({ type: INPUT_NUMBER_DAYS, payload: beforeDates });
  }
  return (
    <DateDifference result={result} value={value} handleInput={handleInput} />
  );
}
