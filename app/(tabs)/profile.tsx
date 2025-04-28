/*
Authored by: Vince Jeru Angeles
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SS00] - Profile Screen
Description: A screen to display the current logged-in user's profile, such as their icon, bio, location, email, and selected hobbies for display
 */

import { View, Image, Text, SafeAreaView, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import TabsBanner from '@/components/TabsBanner'
{/*}import ProfileBackground from '../../assets/svg/EllipseBackground'*/}
import {MapPin, Mail} from "lucide-react-native";
import { useRouter, Link } from "expo-router";
import DisplayCategories from "@/components/DisplayCategories";

const Profile = () => {

    const profileIcon = require("../../assets/images/ghouse.png");
    const router = useRouter();

    const kbRoute = () => {
            router.push("/homeChildren/categoryListings");
        }
    const logoutRoute = () => {
            router.push("/../login");
        }

  return (

      <LinearGradient
        colors={["#00072D", "#0A2472", "#0A2472"]}
        style={styles.background}>

        <SafeAreaView  style={styles.SafeAreaView} className="mx-[15px]">

            {/* Gap />*/}
            <View className="flex mt-5" style={{height: '20%'}}>

            </View>
            {/* Main Content />*/}
            <View className="flex" style={{height: '50%', width: '80%',  alignItems: 'center'}}>
                <Image
                        style={styles.icon}
                        source={require('../../assets/images/ghouse.png')}
                      />
                <Text className="font-extrabold mt-5 pb-4" style={{fontSize: 40, color: '#B9D7FF',  textShadowColor: 'black', textShadowOffset: {width: 0, height: 5}, shadowOpacity: 0.25, textShadowRadius: 5}}>Gregory House</Text>
                <Text className="text-white" style={{fontSize: 15, textAlign: 'center'}}>Hi! I’m Gregory — I build custom mechanical keyboards and cook up great food in my spare time. If you need a unique keyboard or a killer recipe, I’m here to help!</Text>
                 <View className="flex-row my-3" style={{alignItems: 'center'}}>
                    <MapPin color={"white"} size={15}/>
                    <Text className="text-white ml-2" style={{fontSize: 10}}>Naga City, Camarines Sur</Text>
                    <Text className="text-white" style={{fontSize: 15}}> | </Text>
                    <Mail color={"white"} size={15}/>
                    <Text className="text-white ml-2" style={{fontSize: 10}}>gbahay@gmail.com</Text>
                 </View>

                 <View className="flex-col" style={{alignItems:'center', width: '125%',}}>
                    {/* Hobbies List */}
                    <Text className="text-[#B9D7FF] font-extrabold text-[25px] mb-3 px-3" style={{alignSelf: 'left',}}>Hobbies</Text>
                    <View className="flex-row mb-1" style={styles.spacing}>
                        <DisplayCategories  title="audiophilia" />
                        <DisplayCategories  title="keyboard" onPress={ kbRoute }/>
                        <DisplayCategories  title="cooking"/>
                        <DisplayCategories  title="brewing"/>
                    </View>
                    {/* Buttons */}
                    <View className="flex-row" style={{alignItems: 'center',gap:50}}>
                        <Button title="Edit Profile" color='#011D56'></Button>
                        <Button title="Log Out" onPress={logoutRoute} color='#B71C1C'></Button>
                    </View>
                 </View>
            </View>

        </SafeAreaView>
       </LinearGradient>
  )
}

export default Profile

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      paddingBottom: 200,

  },
    SafeAreaView: {
    alignItems: 'center',
    },

    icon: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginLeft: 4,
    },
    spacing: {
             borderBottomWidth: 25,
             borderBottomColor: "transparent",
         },
  })