import React from 'react'
import { View,Text} from 'react-native'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const Destination = () => {
  
  const Stack = createNativeStackNavigator();  
  return (
    <View style={{ flex: 1 }}>

      
      <View style={{ flex: 1}}>
        <Map />
      </View>



      <View style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}

export default Destination;
