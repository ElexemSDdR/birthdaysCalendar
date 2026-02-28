import { useThemeColor } from '@/hooks/use-theme-color'
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'
import { ThemedText } from './themed-text'

export type ThemedTouchableOpacityProps = TouchableOpacityProps & {
  lightColor?: string
  darkColor?: string
  whichBtnIs?: 'changeMonth' | 'restartCalendar'
  label: string
  textStyle?: StyleProp<TextStyle>
}

const styleSheet = StyleSheet.create({
  restartButton: {
    position: 'absolute',
    height: '100%',
    right: 20,
    paddingTop: 2,
    paddingBottom: 6,
    paddingInline: 3,
    overflow: 'visible',
    borderRadius: 50,
    transform: [{ scale: 1.3 }],
  },
  button: {
    borderRadius: 50,
    paddingBlock: 12,
    paddingInline: 20,
  },
  buttonLabel: {
    fontSize: 25,
    lineHeight: 20,
    fontWeight: 'bold',
  },
})

const ThemedTouchableOpacity = ({
  style,
  textStyle,
  lightColor,
  darkColor,
  whichBtnIs,
  label,
  ...props
}: ThemedTouchableOpacityProps) => {
  const buttonBackgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'buttonBackground',
  )

  return (
    <TouchableOpacity
      style={[
        { backgroundColor: buttonBackgroundColor },
        whichBtnIs === 'restartCalendar' ? styleSheet.restartButton : undefined,
        whichBtnIs === 'changeMonth' ? styleSheet.button : undefined,
        style,
      ]}
      {...props}
    >
      <ThemedText style={[styleSheet.buttonLabel, textStyle]}>
        {label}
      </ThemedText>
    </TouchableOpacity>
  )
}

export default ThemedTouchableOpacity
