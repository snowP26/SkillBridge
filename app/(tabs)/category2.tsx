/* 
Authored by: Almond Nicholas Turiano
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SS012] - Listing Screen
Description: A screen for the full details of a listing
 */

import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions, ScrollView } from "react-native";
import { MapPin, CalendarClock, CircleUserRound, ArrowLeft, Heart } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import '../globals.css';


const jobData = {
  title: "I need someone to mod my keyboard",
  location: "Naga City, Camarines Sur",
  postedDate: "Posted March 1",
  finishDate: "Due 26th of March 2025",
  price: "PHP 850",
  description:
    "I am looking for someone who can help me mod my keyboard. I currently own an Akko 5075s and here's the list of mods I want on my keyboard. \n \nI do not have any of the necessary tools needed to complete the mod but I am willing to pay extra for the things needed to mod my keyboard. I will also deliver my keyboard to you for the modding process. \n",
  mods: ["Polyfill mod", "Painter’s tape mod", "Switch lubing", "Stab replacement"],
};

export default function Category2() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#00072D", "#0A2472", "#0A2472", "#0A2472"]}
      className="flex-1 h-full w-full"
    >
      <View className="flex-1 ">
        <View>
          <View className="w-full h-[120px] object-cover">
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/ff/d1/af/ffd1af7d8daeaef15ad9fcb9c1dbd8aa.jpg",
              }}
              className="w-full h-[120px] object-cover"
            />
          </View>
          
          <TouchableOpacity className="absolute top-15 left-15 p-[5px]"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft size={30} color="white" />
          </TouchableOpacity>
        </View>
        

        <View className="p-[15px]">
          <View className="flex-row justify-between items-center">
            <Text className="text-[22px] font-bold color-white flex-1">{jobData.title}</Text>
            <Heart size={24} color={"white"} />
          </View>
          <View className="flex-row items-center mt-[5px]">
            <CircleUserRound size={75} color={"white"} />
            <View className="ml-[10px]">
              <View className="flex-row items-center mt-[3px]">
                <MapPin color={"white"} />
                <Text className="text-[#A9C7FF] text-[12px] ml-10">{jobData.location}</Text>
              </View>
              <View className="flex-row items-center mt-[3px]">
                <CalendarClock color={"white"} />
                <Text className="text-[#A9C7FF] text-[12px] ml-10">{jobData.finishDate}</Text>
                <Text className="text-[#A9C7FF] text-[12px] ml-10">{jobData.postedDate}</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-between p-[15px]">
          <TouchableOpacity className="px-[15px] py-[10px] border-[1px] border-white rounded-[5px]">
            <Text className="text-[18px] font-bold text-white">{jobData.price}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-[15px] py-[10px] rounded-[5px]">
            <Text className="font-bold color-sb3">Message</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          ListHeaderComponent={<Text className="text-[14px] color-white">{jobData.description}</Text>}
          data={jobData.mods}
          renderItem={({ item }) => <Text className="text-[14px] color-white mt-[5px]">• {item}</Text>}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: "#081E42",
    padding: 15,
    borderRadius: 10,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
