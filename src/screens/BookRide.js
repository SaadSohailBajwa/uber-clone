
import react from "react";
import { View, Text, Button, TextInput,StatusBar } from "react-native";
import AddressAutocomplete from "../utilities/AddressAutocomplete";

const BookRide = ({ navigation }) => {
  return (
    <View>
      <StatusBar backgroundColor={"lightgrey"} />
      <Text>book a ride</Text>
      <AddressAutocomplete />
      <Text>Some text under auto complete</Text>
      <Button
        title="select destination"
        onPress={() => {
          navigation.navigate("Destination");
        }}
      />
    </View>
  );
};

export default BookRide;
