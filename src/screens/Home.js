import react from "react";
import {View,Text,StyleSheet} from 'react-native';
import NavOptions from "../components/NavOptions";


const Home = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>
                Lets build uber
            </Text>
            <NavOptions navigation={navigation}/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});