import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import TabsBanner from '@/components/TabsBanner'
import { useState } from 'react'
import ChatBox from '@/components/ChatBox'

export default function Inbox(){
  const [client, setClient] = useState(true)
  const [freelancer, setFreelancer] = useState(false)

  const [isRead, setIsRead] = useState(false)


  const isReadChange = () => {
    setIsRead((prev) => (!prev))
  }


  const userTypeChange = () => {
    if(client){
      setClient(false);
      setFreelancer(true);
    } else {
      setClient(true);
      setFreelancer(false);
    }
  }

  return (
    <LinearGradient
      colors={["#00072D", "#0A2472", "#0A2472"]}
      style={ styles.background } 
    >
      <SafeAreaView className='flex-1 px-[15px] py-[20px]'>
        <TabsBanner header="Inbox" />

          <View className='mt-[15%] mb-5'>
            <View className='flex flex-row mx-[5%] justify-between'>
              <Text className={`text-3xl 
                ${client 
                ? `text-[#A6E1FA] font-bold border-b-4 border-double border-y-[#A6E1FA]` 
                : `text-white font-bold`}`
                } 
              onPress={userTypeChange}>
                Client
              </Text>

              <Text className={`text-3xl 
                ${freelancer 
                ? `text-[#A6E1FA] font-bold border-b-4 border-double border-y-[#A6E1FA]` 
                : `text-white font-bold`}`
                } 
              onPress={userTypeChange}>
                Freelancer
              </Text>
            </View>
            <View className="h-[1px] bg-white w-[90%] self-center mt-0 mb-1.5"/>
          </View>
          {client 
          ? <View> 
              <ChatBox photo={ require("@/assets/images/ghouse.png")} name="Robert Chase" snippet="Hello this is my snippet" time="20 min" /> 
              <ChatBox photo={ require("@/assets/images/ghouse.png")} name="Robert Chase 2" snippet="2 Hello this is my snippet" time="220 min" /> 
           </View>
          : <ChatBox photo={ require("@/assets/images/ghouse.png") } name="Shongololo" snippet="hellow po ako to" time="30 days"/>
          }
      </SafeAreaView>  
    </LinearGradient>
    
  )
}


const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: "100%",
      height: "100%",
      paddingBottom: 200,
  },
})