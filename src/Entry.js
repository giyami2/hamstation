import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import entryImage from "../assets/images/entry.jpg";
import imageLink from "../assets/images/right-arrow.png";
import {
  useFonts,
  BalooDa2_400Regular,
  BalooDa2_500Medium,
  BalooDa2_600SemiBold,
  BalooDa2_700Bold,
  BalooDa2_800ExtraBold,
} from "@expo-google-fonts/baloo-da-2";

//navigationnp
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./Main";

const Stack = createStackNavigator();

function Entry() {
  let [fontsLoaded] = useFonts({
    GaeguLight: require("../assets/fonts/Gaegu-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Main" component={Main}
          options={{
            title: 'Main',
            headerStyle: {
              backgroundColor: '#e39fa2',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'GaeguLight',
              fontSize: 25
            }
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={entryImage} style={styles.image}>
        <View style={styles.textView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.text}>
              시작하기
              <Image style={styles.imageLink} source={{ uri: imageLink }} />
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageLink: {
    width: 20,
    height: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    position: "absolute",
    bottom: "18%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#e39fa2",
    border: "1px solid white",
    borderRadius: "13px",
    paddingHorizontal: 30,
  },
  text: {
    color: "white",
    fontFamily: "GaeguLight",
    fontSize: 30,
  },
});

export default Entry;
