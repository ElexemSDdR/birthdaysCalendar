import { StyleSheet } from "react-native";

// Components
import { CalendarProps } from "@components/calendar";
import { ThemedText } from "@components/themed-text";
import ThemedTouchableOpacity from "@components/themed-touchable-opacity";
import { ThemedView } from "@components/themed-view";

// Types
import { MONTHS } from "@/env.d";

type CalendarDateProps = Omit<CalendarProps, "currentDay"> & {
  previousMonth: () => void;
  nextMonth: () => void;
  restartCalendar: () => void;
};

const styleSheet = StyleSheet.create({
  container: {
    display: "flex",
    gap: 14,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 14,
  },
  yearHeader: {
    position: "relative",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBlock: 10,
    justifyContent: "center",
    overflow: "visible",
    // backgroundColor: 'rgba(128, 128, 128, 0.1)',
  },
  monthHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingInline: 26,
  },
});

const CalendarDate = ({
  currentMonthNumber,
  currentYear,
  previousMonth,
  nextMonth,
  restartCalendar,
  ...otherProps
}: CalendarDateProps) => {
  return (
    <ThemedView style={styleSheet.container}>
      <ThemedView style={styleSheet.yearHeader}>
        <ThemedText
          {...otherProps}
          type="title"
          style={{
            textAlign: "left",
            position: "absolute",
            left: 20,
          }}
        >
          {currentYear}
        </ThemedText>
        <ThemedTouchableOpacity
          whichBtnIs="restartCalendar"
          onPressIn={restartCalendar}
          label="⟳"
        />
      </ThemedView>
      <ThemedView style={styleSheet.monthHeader}>
        {/* Previous button */}
        <ThemedTouchableOpacity
          whichBtnIs="changeMonth"
          label="&lt;"
          onPressIn={previousMonth}
        />
        {/* Month name */}
        <ThemedText {...otherProps} type="subtitle">
          {MONTHS[currentMonthNumber as keyof typeof MONTHS].name}
        </ThemedText>
        {/* Next button */}
        <ThemedTouchableOpacity
          whichBtnIs="changeMonth"
          onPressIn={nextMonth}
          label="&gt;"
        />
      </ThemedView>
    </ThemedView>
  );
};

export default CalendarDate;
