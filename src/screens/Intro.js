import react from "react";
import { View, Text, Button, TextInput } from "react-native";

const Intro = ({ navigation }) => {
  return (
    <View>
      <Text>ride with uber</Text>
      <Button
        title="Ride"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Text>Drive uber</Text>
      <Button
        title="Drive"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

export default Intro;
