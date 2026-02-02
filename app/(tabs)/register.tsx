import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

const Register = () => {
  return (
    <ThemedView
      lightColor="white"
      darkColor="black"
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 160,
      }}
    >
      <ThemedText>Register</ThemedText>
    </ThemedView>
  );
};

export default Register;
