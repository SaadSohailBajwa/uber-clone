import React, { useState } from "react";
import { View, TextInput, FlatList, Text ,TouchableOpacity} from "react-native";
import axios from "axios";
import { MAP_BOX_KEY} from '@env'
import { useDispatch,useSelector } from "react-redux";
import { setDestination, setOrigin } from "../../slices/navSlice";



function AddressAutocomplete() {

    const dispatch = useDispatch();
    const origin = useSelector(state=>state.nav.origin);

  const [query, setQuery] = useState("");
  const [addresses, setAddresses] = useState([]);



const MAPBOX_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";

  const handleInputChange = async (text) => {
    setQuery(text);
    const response = await axios.get(
      `${MAPBOX_URL}/${encodeURIComponent(text)}.json`,
      {
        params: {
          access_token: MAP_BOX_KEY,
          autocomplete: true,
          limit: 5, // Limit results. Adjust as needed.
        },
      }
    );

    if (response.data && response.data.features) {
      setAddresses(response.data.features);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={query}
        onChangeText={handleInputChange}
        placeholder="Type an address"
        style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
      />
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              const coords = item.geometry.coordinates;

              // Dispatch the action with the appropriate values
              dispatch(
                setOrigin({
                  location: {
                    latitude: coords[1], // Note that latitude is the second value in the array
                    longitude: coords[0],
                  },
                  description: item.place_name,
                })
              );

              dispatch(setDestination(null));
              // Update the TextInput with the selected address.
              setQuery(item.place_name);

              
            }}
          >
            <Text style={{ backgroundColor: "white", padding: 10 }}>
              {item.place_name}
            </Text>
          </TouchableOpacity>
        )}
      />
      {origin && origin.location && (
        <View><Text>
          Selected Coordinates: Latitude: {origin.location.latitude}, Longitude:{" "}
          {origin.location.longitude} ////////////////////These values are coming from redux
        </Text> 
        <Text>{origin.description}</Text>
        </View>
        
      )}
    </View>
  );
}

export default AddressAutocomplete;








