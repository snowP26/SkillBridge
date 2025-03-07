/* 
Authored by: James Gabriel Verceluz
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SB-001] Landing Screen
Description: A screen where the user could choose to Login or Register their accounts.a
 */

import { Text, View, StyleSheet, Dimensions, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import Button from "@/components/Buttons";

const loginButton = () => {
  Alert.alert("You clicked the Login button.")
}

const signUpButton = () => {
  Alert.alert("You clicked the Sign Up button.")
}


const bridgeLogo = require("../assets/images/sbBridgeW.png")

export default function Index() {
  return (
    <LinearGradient
      colors={ ["#00072D", "#0A2472"] } 
      style={ styles.background }
    >
      <Text style={ styles.header }>SkillBridge</Text>
      <View style={ styles.bridgeContainer }>
        <Image source={ bridgeLogo } style={ styles.image }/>
      </View>
      <Text style={ styles.spiel1 }>Turn your Passion into Profits.</Text>
      <Text style={ styles.spiel2 }>Continue to do what you love.</Text>

      <View style={ styles.bwrap }> 
        <Button label={ "Log In" } onPress={ loginButton } />
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
            <Text style={styles.divider}>OR</Text>
          <View style={styles.line} />
        </View>
        <Button label={ "Sign Up" } theme="secondary" onPress={ signUpButton } />
      </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "900",
    fontSize: Dimensions.get("window").width * 0.14,
    color: "white",
    marginTop: 56,
    marginLeft: 18,
  },

  background: {
    flex: 1, 
    width: Dimensions.get("window").width, 
    height: Dimensions.get("window").height,
  },

  bridgeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -70,
  },

  spiel1: {
    fontWeight: "900",
    fontStyle: "italic",
    color: "#CAE2FF",
    fontSize: Dimensions.get("window").width * 0.06,
    marginLeft: 18,
  },

  spiel2: {
    fontStyle: "italic",
    color: "#CAE2FF",
    fontSize: Dimensions.get("window").width * 0.045,
    marginLeft: 18,
    marginBottom: 40,
  },

  bwrap: {
    alignContent: "center",
    alignItems: "center",
  },

  divider: {
    color: "white",
    fontWeight: "bold",
  },

  image: {
    width: Dimensions.get("window").width, 
    height: Dimensions.get("window").height * 0.6, 
  },

  line: {
    flex: 1, 
    height: 1, 
    backgroundColor: "white", 
    marginHorizontal: 10, 
  },

  dividerContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    width: "90%", 
    justifyContent: "center", 
    marginVertical: 10, 
    
  },
})


/* 
  Review horizontal line styles and how it works
  Review button styles
*/