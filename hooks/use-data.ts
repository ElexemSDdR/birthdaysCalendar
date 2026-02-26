import { useState } from "react";

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type DateState = {
  month: Month;
  year: number;
  day: number;
};

const useDate = () => {
  const currentMonthNumber = new Date().getMonth() + 1;
  const currentYearNumber = new Date().getFullYear();
  const currentDayNumber = new Date().getDate();

  const [currentDate, setCurrentDate] = useState<DateState>({
    month: currentMonthNumber as Month,
    year: currentYearNumber,
    day: currentDayNumber,
  });

  const previousMonth = () => {
    setCurrentDate((prev: DateState) => {
      const newMonth = prev.month === 1 ? 12 : prev.month - 1;
      const newYear = prev.month === 1 ? prev.year - 1 : prev.year;
      return {
        ...prev,
        month: newMonth as Month,
        year: newYear,
      };
    });
  };

  const nextMonth = () => {
    setCurrentDate((prev: DateState) => {
      const newMonth = prev.month === 12 ? 1 : prev.month + 1;
      const newYear = prev.month === 12 ? prev.year + 1 : prev.year;
      return {
        ...prev,
        month: newMonth as Month,
        year: newYear,
      };
    });
  };

  const restartToRealDate = () => {
    setCurrentDate((prev: DateState) => {
      return {
        ...prev,
        month: currentMonthNumber as Month,
        year: currentYearNumber,
      };
    });
  };

  return {
    currentDate,
    previousMonth,
    nextMonth,
    restartToRealDate,
  };
};

export default useDate;
