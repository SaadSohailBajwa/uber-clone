import react from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";


const data = [
  {
    id: "123",
    title: "Get a ride",
    screen: "MapScreen",
    color:"lightblue",
    screen:"BookRide"
    
  },
  {
    id: "124",
    title: "Get food",
    screen: "MapScreen",
    color:'pink'
  },
];

const NavOptions = ({navigation}) => {
  

  return (
    
      <FlatList
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
            <TouchableOpacity 
            style={{height:100,padding:15,backgroundColor:item.color}}
            onPress={()=>{navigation.navigate(item.screen)}}
            
            >
                <Text>{item.title}</Text>
            </TouchableOpacity>
  )}
      />
    
  );
};

export default NavOptions;
