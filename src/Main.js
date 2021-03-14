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

function Main() {
  let [fontsLoaded] = useFonts({
    GaeguLight: require("../assets/fonts/Gaegu-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.textView}>
        <Text>Main</Text>
        </View>
      </SafeAreaView>
    );
  }
}

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

  
export default Main;