import react from "react";
import {View,Text,Button,TextInput} from "react-native";

const Login = ({navigation})=>{
    return(
        <View>
            <Text>
                this is a login screen
            </Text>
            <TextInput placeholder="enter number"/>
            <Button title="login" onPress={()=>{navigation.navigate('Home')}}/>
            <Text> No account?</Text>
            <Button title="Register" onPress={()=>{navigation.navigate('Register')}}/>
        </View>
    )
}

export default Login;