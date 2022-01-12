import PrevMonthButton from "../PrevMounthButton/PrevMounthButton";

export default function PrevMonthButtonContainer({ year, month, setData }) {
  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    setData(date);
  };

  return (
    <PrevMonthButton handlePrevMonthButtonClick={handlePrevMonthButtonClick} />
  );
}
