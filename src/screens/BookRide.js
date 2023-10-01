
import react from "react";
import { View, Text, Button, TextInput,StatusBar } from "react-native";
import AddressAutocomplete from "../utilities/AddressAutocomplete";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../slices/navSlice";

const BookRide = ({ navigation }) => {
  const origin = useSelector(selectOrigin)
  return (
    <View>
      <StatusBar backgroundColor={"lightgrey"} />
      <Text>book a ride</Text>
      <AddressAutocomplete />
      <Text>Some text under auto complete</Text>
      <Button
        title="select destination"
        onPress={() => {
          if(origin){
            navigation.navigate("Destination");
          }
          
        }}
      />
    </View>
  );
};

export default BookRide;
