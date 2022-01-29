import React from "react";

export default function DateDifference({ result, value, handleInput }) {
  return (
    <>
      {result ? (
        <input value={result} />
      ) : (
        <input
          value={value}
          onChange={(event) => handleInput(event)}
          placeholder="разница в днях"
        />
      )}
    </>
  );
}
