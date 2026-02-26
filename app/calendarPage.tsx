
import Calendar from "@/components/calendar";
import useDate from "@/hooks/use-data";
import CalendarDate from "@components/calendar-date";
import { ThemedView } from "@components/themed-view";

const CalendarPage = () => {
  const { currentDate, previousMonth, nextMonth, restartToRealDate } =
    useDate();
  const { month, year, day } = currentDate;

  return (
    <ThemedView
      lightColor="white"
      darkColor="black"
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 160,
      }}
    >
      <CalendarDate
        currentMonthNumber={month}
        currentYear={year}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
        restartCalendar={restartToRealDate}
      />
      <Calendar
        currentMonthNumber={month}
        currentYear={year}
        currentDay={day}
      />
    </ThemedView>
  );
};

export default CalendarPage;
