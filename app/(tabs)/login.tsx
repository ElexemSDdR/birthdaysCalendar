import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
// import { Button } from "@react-navigation/elements";
// import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TextInput } from "react-native";

const styleSheet = StyleSheet.create({
  input: { 
    marginTop: 10, 
    width: 200, 
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
  },
});

const Login = () => {
  // const navigation = useNavigation();

  return (
    <ThemedView
      lightColor="white"
      darkColor="black"
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
      }}
    >
      <ThemedText>Login</ThemedText>
      <TextInput 
        inputMode="email" 
        style={styleSheet.input}
      ></TextInput>
      <TextInput 
        inputMode="text" 
        secureTextEntry={true} 
        style={styleSheet.input}
      ></TextInput>
      {/* <Button onPressIn={() => navigation.navigate("calendarPage")}>
        Calendar
      </Button> */}
    </ThemedView>
  );
};

export default Login;
