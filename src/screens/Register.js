import react from "react";
import { View, Text,Button } from "react-native";

const Register = ({navigation}) => {
  return (
    <View>
      <Text>this is a register screen</Text>
      <Text>Enter you details here</Text>
      <Button
        title="Make Account"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Text>Already have an account?</Text>
      <Button
        title="login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};

export default Register;
