import react from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Intro from "../screens/Intro";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import BookRide from "../screens/BookRide";
import Destination from "../screens/Destination";


const Navigation = ()=>{

    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BookRide" component={BookRide} options={{
            headerShown:false
          }}/>
          <Stack.Screen name="Destination" component={Destination}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigation;