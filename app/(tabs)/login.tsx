import { ThemedText } from '@/components/themed-text'
import ThemedTouchableOpacity from '@/components/themed-touchable-opacity'
import { ThemedView } from '@/components/themed-view'
// import { Button } from "@react-navigation/elements";
// import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TextInput, View } from 'react-native'

const styleSheet = StyleSheet.create({
  input: {
    marginTop: 10,
    width: 200,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
  },
})

const Login = () => {
  // const navigation = useNavigation();

  return (
    <ThemedView
      lightColor="white"
      darkColor="black"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 20,
        justifyContent: 'space-around',
        height: '50%',
        margin: 'auto',
        paddingBlock: 5,
        width: '90%',
      }}
    >
      <ThemedText type="title">Iniciar Sesión</ThemedText>
      <View style={{ display: 'flex', gap: 8 }}>
        <TextInput
          inputMode="email"
          style={styleSheet.input}
          placeholder="email"
        ></TextInput>
        <TextInput
          inputMode="text"
          secureTextEntry={true}
          style={styleSheet.input}
          placeholder="contraseña"
        ></TextInput>
      </View>
      <ThemedTouchableOpacity
        onPressIn={() => navigation.navigate('calendarPage')}
        label="Acceder"
        style={{
          backgroundColor: '#353535',
          padding: 20,
          opacity: 1,
          borderRadius: 9999,
        }}
        textStyle={{ color: '#ffffff', fontWeight: '500', opacity: 1 }}
      ></ThemedTouchableOpacity>
    </ThemedView>
  )
}

export default Login
