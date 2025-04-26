import { SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import TabsBanner from '@/components/TabsBanner'

const inbox = () => {
  return (
    <LinearGradient
      colors={["#00072D", "#0A2472", "#0A2472"]}
      style={ styles.background } 
    >
      <SafeAreaView className='flex-1 px-[15px] py-[20px]'>
        <TabsBanner header="Inbox" />
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