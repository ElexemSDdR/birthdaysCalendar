import { Months } from '@/constants/months'
import { Birthday, MONTHS } from '@/env.d'
import { useState } from 'react'
import { Modal, View, type TextProps } from 'react-native'
import CalendarDay from './calendar-day'
import { ThemedText } from './themed-text'
import ThemedTouchableOpacity from './themed-touchable-opacity'
import { ThemedView } from './themed-view'

export type CalendarProps = TextProps & {
  currentMonthNumber: number
  currentYear: number
  currentDay: number
  birthdays: Birthday[]
}

const Calendar = ({
  currentMonthNumber,
  currentYear,
  currentDay,
  birthdays,
  ...otherProps
}: CalendarProps) => {
  const [dialogVisible, setDialogVisible] = useState(false)
  const [daySelected, setDaySelected] = useState(0)
  const [selectedBirthday, setSelectedBirthday] = useState<Birthday[]>([])
  // const color = useThemeColor({ light: 'light', dark: 'dark' }, 'background')

  const handleClick = (day: number) => {
    setDialogVisible(true)
    setDaySelected(day)
    const birthdaysFiltereds = birthdays.filter(
      (birth) =>
        birth.birthdayDate.day === day &&
        birth.birthdayDate.month === currentMonthNumber,
    )
    setSelectedBirthday(birthdaysFiltereds)
  }

  const getBgColorForCurrentDay = (day: number): string => {
    if (
      day === currentDay &&
      currentMonthNumber === new Date().getMonth() + 1 &&
      currentYear === new Date().getFullYear()
    ) {
      return 'rgba(100, 149, 237, 0.3)'
    } else {
      return 'transparent' // This marks the exactly current day (for example 10/2/2026, not any 10th of any year or any month, only the 10th of February 2026)
    }
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {Array.from(
        { length: MONTHS[currentMonthNumber as keyof typeof MONTHS].days },
        (_, i) => {
          return (
            <View key={i}>
              <CalendarDay
                label={(i + 1).toString()}
                key={i + 1}
                onPress={() => handleClick(i + 1)}
                isThereBirthday={birthdays.some(
                  (birth) =>
                    birth.birthdayDate.day === i + 1 &&
                    birth.birthdayDate.month === currentMonthNumber,
                )}
                {...otherProps}
                style={{
                  width: 60,
                  height: 90,
                  display: 'flex',
                  borderColor: 'gray',
                  borderWidth: 1,
                  paddingInline: 6,
                  backgroundColor: getBgColorForCurrentDay(i + 1),
                }}
              ></CalendarDay>
            </View>
          )
        },
      )}
      <Modal visible={dialogVisible} animationType="slide">
        <ThemedView
          style={{
            height: '100%',
            paddingBlock: 10,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ThemedTouchableOpacity
            label="X"
            onPress={() => setDialogVisible(false)}
            style={{ width: 55 }}
            whichBtnIs="changeMonth"
          ></ThemedTouchableOpacity>
          <ThemedText
            type="title"
            style={{ textAlign: 'center', paddingBlock: 25 }}
          >
            {daySelected} de {Months[currentMonthNumber - 1]} de {currentYear}
          </ThemedText>
          {selectedBirthday.length > 0 ? (
            selectedBirthday.map((birth, i) => {
              return (
                <ThemedText
                  style={{ paddingInline: 15 }}
                  key={`birthday-person-${birth.name}-${birth.surname}-${i}`}
                  type="subtitle"
                >
                  {birth.name} {birth.surname} cumple {birth.age + 1}
                </ThemedText>
              )
            })
          ) : (
            <ThemedText style={{ paddingInline: 15 }} type="subtitle">
              No hay cumpleaños registrados para este día
            </ThemedText>
          )}
        </ThemedView>
      </Modal>
    </View>
  )
}

export default Calendar
