/* 
Authored by: James Gabriel Verceluz
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SB-001] Landing Screen
Description: A screen where the user could choose to Login or Register their accounts.a
 */
import { Text, View, StyleSheet, Dimensions} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useRouter } from "expo-router";


import Button from "@/components/Buttons";


export default function Index() {
  
const router = useRouter();

const loginButton = () => {
  router.push("/login");
}

const signUpButton = () => {
  router.push("/(tabs)/inbox");
};

const screenHeight = Dimensions.get("window").height;

const bridgeLogo = require("../assets/images/sbBridgeW.png");

  return (
    <LinearGradient
      colors={ ["#00072D", "#0A2472", "#0A2472", "#0A2472"] }
      style={{ height: screenHeight }} 
      className="flex-1 w-full "
    >
      <Text className="text-7xl text-white mt-[56px] ml-[18px] font-extrabold pt-8">SkillBridge</Text>

      <View className="content-center items-center mb-[-90px]">
        <Image source={ bridgeLogo } style={ styles.image }/>
      </View>

      <Text className="font-extrabold italic color-[#CAE2FF] text-[1.75rem] ml-[18px]" >Turn your Passion into Profits.</Text>
      <Text className="italic color-[#CAE2FF] text-1xl ml-[18px] mb-[30px]">Continue to do what you love.</Text>

      <View className="content-center items-center"> 
        <Button label={ "Log In" } onPress={ loginButton } />

        <View className="flex-row items-center w-[90%] content-center my-[10px]">
          <View className="flex-1 h-[1px] bg-white mx-[10px]" />

            <Text className="text-white font-bold">OR</Text>

          <View className="flex-1 h-[1px] bg-white mx-[10px]" />
        </View>

        <Button label={ "Register" } theme="secondary" onPress={ signUpButton }/>
      </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width, 
    height: Dimensions.get("window").height * 0.6, 
  },

})

