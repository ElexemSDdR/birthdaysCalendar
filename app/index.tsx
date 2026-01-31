import { useState } from "react";
import { Image } from "react-native";

import { ThemedView } from "@components/themed-view"
import CalendarDate from "@components/calendar-date";
import Calendar from "@/components/calendar"

const Index = () => {
  const currentMonthNumber = new Date().getMonth() + 1;
  const currentYearNumber = new Date().getFullYear();
  const [currentMonth, setCurrentMonth] = useState(currentMonthNumber);
  const [currentYear, setCurrentYear] = useState(currentYearNumber);

  const previousMonth = () => {
    setCurrentMonth((prev: number) => prev === 1 ? 12 : prev - 1);
    setCurrentYear((year: number) => currentMonth === 1 ? year - 1 : year);
  };

  const nextMonth = () => {
    setCurrentMonth((next: number) => next === 12 ? 1 : next + 1);
    setCurrentYear((year: number) => currentMonth === 12 ? year + 1 : year);    
  };

  const restartCalendar = () => {
    setCurrentMonth(currentMonthNumber);
    setCurrentYear(currentYearNumber);
  }

  return (
    <ThemedView
      lightColor="white"
      darkColor="black"
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 160,
      }}
    >
      <CalendarDate
        monthNumber={currentMonth}
        year={currentYear}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
        restartCalendar={restartCalendar}
      >
        
      </CalendarDate>
      <Calendar
        monthNumber={currentMonth}
        year={currentYear}
      />
    </ThemedView>
  );
}

export default Index;