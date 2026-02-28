import Calendar from '@/components/calendar'
import CalendarHeader from '@/components/calendar-header'
import { Birthday } from '@/env'
import useDate from '@/hooks/use-data'
import { ThemedView } from '@components/themed-view'
import { useEffect, useState } from 'react'

const CalendarPage = () => {
  const { currentDate, previousMonth, nextMonth, restartToRealDate } = useDate()
  const { month, year, day } = currentDate
  const [birthdays, setBirthdays] = useState<Birthday[]>([])

  useEffect(() => {
    setBirthdays([
      {
        name: 'Ejemplo',
        surname: 'Uno',
        age: 15,
        personImg: '',
        birthdayDate: {
          day: 13,
          month: 2,
        },
      },
      {
        name: 'Ejemplo',
        surname: 'Dos',
        age: 22,
        personImg: '',
        birthdayDate: {
          day: 23,
          month: 5,
        },
      },
      {
        name: 'Ejemplo',
        surname: 'Tres',
        age: 3,
        personImg: '',
        birthdayDate: {
          day: 30,
          month: 6,
        },
      },
      {
        name: 'Padre',
        surname: 'Putin',
        age: 42,
        personImg: '',
        birthdayDate: {
          day: 28,
          month: 2,
        },
      },
      {
        name: 'Cumpleañero',
        surname: 'Repetido',
        age: 42,
        personImg: '',
        birthdayDate: {
          day: 28,
          month: 2,
        },
      },
    ])
  }, [])

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
      <CalendarHeader
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
        birthdays={birthdays}
      />
    </ThemedView>
  )
}

export default CalendarPage
