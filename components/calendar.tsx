import { MONTHS } from "@/env.d";
import { ThemedText } from "@components/themed-text";
import { View, type TextProps } from "react-native";

export type CalendarProps = TextProps & {
  currentMonthNumber: number;
  currentYear: number;
  currentDay: number;
};

const Calendar = ({
  currentMonthNumber,
  currentYear,
  currentDay,
  ...otherProps
}: CalendarProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {Array.from(
        { length: MONTHS[currentMonthNumber as keyof typeof MONTHS].days },
        (_, i) => {
          return (
            <View key={i}>
              <ThemedText
                key={i + 1}
                {...otherProps}
                style={{
                  width: 60,
                  height: 90,
                  display: "flex",
                  textAlign: "left",
                  borderColor: "gray",
                  borderWidth: 1,
                  paddingInline: 6,
                  backgroundColor:
                    i + 1 === currentDay &&
                    currentMonthNumber === new Date().getMonth() + 1 &&
                    currentYear === new Date().getFullYear()
                      ? "rgba(100, 149, 237, 0.3)"
                      : "transparent", // This marks the exactly current day (for example 10/2/2026, not any 10th of any year or any month, only the 10th of February 2026)
                }}
              >
                {i + 1}
              </ThemedText>
            </View>
          );
        },
      )}
    </View>
  );
};

export default Calendar;
