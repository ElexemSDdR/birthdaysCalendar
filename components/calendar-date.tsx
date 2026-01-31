import { View } from "react-native";
import { Button } from "@react-navigation/elements";

import { CalendarProps } from "@components/calendar"
import { ThemedView } from "@components/themed-view";
import { ThemedText } from "@components/themed-text";

import { MONTHS } from "@/env.d";

type CalendarDateProps = CalendarProps & {
  previousMonth: () => void;
  nextMonth: () => void;
  restartCalendar: () => void;
}

const CalendarDate = ({
    monthNumber, 
    year,
    previousMonth,
    nextMonth,
    restartCalendar,
    ...otherProps
  }: CalendarDateProps
  ) => {

  return (
    <ThemedView
      style={{
        display: 'flex',
        gap: 14,
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 14,
      }}
    >
      <ThemedView
        style={{
          position: 'relative',
          height: 90,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingBlock: 10,
          justifyContent: 'center',
          backgroundColor: 'rgba(128, 128, 128, 0.1)',
        }}
      >
        <ThemedText 
          {...otherProps} 
          type="title"
          style={{
            textAlign: 'left',
            position: 'absolute',
            left: 20,
          }}
        > 
          {year}
        </ThemedText>
        <Button
          onPressIn={restartCalendar}
          style={{
            position: 'absolute',
            height: '100%',
            right: 20,
            paddingBlock: 0,
            paddingInline: 0,
            // backgroundColor: 'transparent',
          }}
        >
          <ThemedText
            {...otherProps}
            type="subtitle"
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              fontSize: 32,
            }}
          >
            ⟳
          </ThemedText>
        </Button>
      </ThemedView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          paddingInline: 26,
        }}
      >
      {/* Previous button */}
      <Button
        onPressIn={() => {
          previousMonth();
          console.log(`Prev: ${monthNumber}`)
        }}
      >
        &lt;
      </Button>
      <ThemedText 
          {...otherProps}
          type="subtitle"
          style={{
            textAlign: 'center',
          }}
        >
          {MONTHS[monthNumber as keyof typeof MONTHS].name}
        </ThemedText>
        {/* Next button */}
        <Button
          onPressIn={() => {
            nextMonth();
            console.log(`Next: ${monthNumber}`)
          }}
        >
          &gt;
        </Button>
      </View>
    </ThemedView>
  )
}

export default CalendarDate