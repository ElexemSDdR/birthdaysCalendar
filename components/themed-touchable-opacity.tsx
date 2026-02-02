import { useThemeColor } from "@/hooks/use-theme-color";
import {
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";
import { ThemedText } from "./themed-text";

export type ThemedTouchableOpacityProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  whichBtnIs?: "changeMonth" | "restartCalendar";
  label: string;
};

const styleSheet = StyleSheet.create({
  restartButton: {
    position: "absolute",
    height: "100%",
    right: 20,
    paddingTop: 2,
    paddingBottom: 6,
    paddingInline: 10,
    overflow: "visible",
    borderRadius: 50,
  },
  button: {
    borderRadius: 50,
    paddingBlock: 12,
    paddingInline: 20,
  },
  buttonLabel: {
    fontSize: 25,
    lineHeight: 20,
    fontWeight: "bold",
  },
});

const ThemedTouchableOpacity = ({
  style,
  lightColor,
  darkColor,
  whichBtnIs,
  label,
  ...props
}: ThemedTouchableOpacityProps) => {
  const buttonBackgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "buttonBackground",
  );

  return (
    <TouchableOpacity
      style={[
        { backgroundColor: buttonBackgroundColor },
        whichBtnIs === "restartCalendar" ? styleSheet.restartButton : undefined,
        whichBtnIs === "changeMonth" ? styleSheet.button : undefined,
        style,
      ]}
      {...props}
    >
      <ThemedText style={[styleSheet.buttonLabel]}>{label}</ThemedText>
    </TouchableOpacity>
  );
};

export default ThemedTouchableOpacity;
