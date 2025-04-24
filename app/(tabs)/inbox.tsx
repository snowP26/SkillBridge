import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Move, MoveLeft } from "lucide-react-native";

const inbox = () => {
  return (
    <LinearGradient
      colors={["#00072D", "#0A2472", "#0A2472"]}
      style={ styles.background } 
    >
      <SafeAreaView className="ml-10">
        <MoveLeft color={"white"} />
        <Text className="flex color-white">test</Text>
      </SafeAreaView>
    </LinearGradient>
    
  )
}

export default inbox

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: "100%",
      height: "100%",
      paddingBottom: 200,
  },
})