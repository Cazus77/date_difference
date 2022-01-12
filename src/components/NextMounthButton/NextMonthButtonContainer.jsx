import NextMonthButton from "./NextMounthButton";

export default function NextMonthButtonContainer({ year, month, setData }) {
  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    setData(date);
  };

  return (
    <NextMonthButton handleNextMonthButtonClick={handleNextMonthButtonClick} />
  );
}
