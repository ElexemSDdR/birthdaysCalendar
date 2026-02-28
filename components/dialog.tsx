import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

const Dialog = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button title="Show Dialog" onPress={() => setVisible(true)}></Button>
      <Modal visible={visible} animationType="slide">
        <View>
          <Text>Esto es un Dialogo</Text>
          <Button
            title="CloseDialog"
            onPress={() => setVisible(false)}
          ></Button>
        </View>
      </Modal>
    </>
  );
};

export default Dialog;
