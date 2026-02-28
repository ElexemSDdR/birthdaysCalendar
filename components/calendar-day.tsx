import {
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  View,
  type TouchableHighlightProps,
} from 'react-native'
import { ThemedText } from './themed-text'

export type CalendarDayProps = TouchableHighlightProps & {
  style: StyleProp<TouchableHighlightProps>
  label: string
  isThereBirthday: boolean
}

const styleSheet = StyleSheet.create({
  buttonLabelCalendarDay: {
    fontSize: 15,
    fontWeight: '500',
  },
  birthdayIndicator: {
    position: 'absolute',
    left: 0,
    top: '100%',
    borderRadius: 9999,
    height: 10,
    width: 10,
    backgroundColor: '#ff86fd',
  },
})

const CalendarDay = ({
  style,
  label,
  isThereBirthday,
  ...props
}: CalendarDayProps) => {
  return (
    <TouchableHighlight style={[style]} {...props}>
      <View style={{ position: 'relative' }}>
        <ThemedText style={[styleSheet.buttonLabelCalendarDay]}>
          {label}
        </ThemedText>
        {isThereBirthday && (
          <ThemedText style={styleSheet.birthdayIndicator}></ThemedText>
        )}
      </View>
    </TouchableHighlight>
  )
}

export default CalendarDay
