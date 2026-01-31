import { MONTHS } from "@/env.d";
import { ThemedText } from "@components/themed-text";
import { View, type TextProps } from "react-native";

export type CalendarProps = TextProps & {
  monthNumber: number;
  year: number;
};

const Calendar = ({ monthNumber, year, ...otherProps }: CalendarProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {Array.from(
        { length: MONTHS[monthNumber as keyof typeof MONTHS].days },
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
}

export default Calendar