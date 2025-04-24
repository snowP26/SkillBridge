/* 
Authored by: James Gabriel Verceluz
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SS004] - Home Screen
Description: A screen where the user can view all the categories of help we want to offer.
 */

import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter, Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Bell } from "lucide-react-native";

import ImageViewer from "@/components/ImageViewer";
import DisplayCategories from "@/components/DisplayCategories";



export default function Categories() {

    
    const profileIcon = require("../../assets/images/ghouse.png");
    const router = useRouter();

    const kbRoute = () => {
        router.push("/homeChildren/keybCat");
    }



    return(
        <LinearGradient 
            colors={["#00072D", "#0A2472", "#0A2472"]}
            style={ styles.background }
        >
            {/* Safe Area View for iOS */}
            <SafeAreaView className="mx-[15px]">
                {/* View for header of homepage. */}
                <View className="flex-row mt-5">
                    <ImageViewer imgSource= { profileIcon } type="icon"/> 
                    <View className="ml-5 flex-col">
                        <Text className="text-white">Good Evening!</Text>
                        <Text className="text-[#A6E1FA] font-extrabold text-[25px]">Gregory House</Text>
                    </View>
                    <TouchableOpacity className="text-white ml-auto rounded-full bg-[#475871] w-12 h-12 items-center justify-center">
                        <Bell color={"white"}/>
                    </TouchableOpacity >
                </View>

                {/* Search bar */}
                <View className="mt-[35px] mb-[26px]">
                    <TextInput 
                        placeholder="Search for services, skills, or freelancers..."
                        placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
                        underlineColorAndroid={"transparent"}
                        className="border-1 border-white bg-white p-5  h-[47px] rounded-[10px]"
                    />
                </View>

                {/* Main Content */}
                <ScrollView className="flex-col" showsVerticalScrollIndicator={false}>
                    <View>
                        {/* Recommended For You */}
                        <Text className="text-[#A6E1FA] font-extrabold text-[25px] mb-3">Recommended</Text>
                        <View className="flex-row mb-8" >
                            <DisplayCategories  title="keyboard" onPress={ kbRoute }/>
                            <DisplayCategories  title="boardgame"/>
                            <DisplayCategories  title="photography"/>
                            <DisplayCategories  title="brewing"/>
                        </View>


                        {/* Trending */}
                        <Text className="text-[#A6E1FA] font-extrabold text-[25px] mb-3">Trending</Text>
                        <View className="flex-row mb-8">
                            <DisplayCategories  title="gaming"/>
                            <DisplayCategories  title="brewing"/>
                            <DisplayCategories  title="keyboard" onPress={ kbRoute }/>
                            <DisplayCategories  title="photography"/>
                        </View>
                        

                        {/* All Categories */}
                        <Text className="text-[#A6E1FA] font-extrabold text-[25px] mb-3">All Categories</Text>
                        <View className="flex-row" style={styles.spacing}>
                            <DisplayCategories  title="audiophilia"/>
                            <DisplayCategories  title="automobile"/>
                            <DisplayCategories  title="boardgame"/>
                            <DisplayCategories  title="brewing"/>
                        </View>

                        <View className="flex-row" style={styles.spacing}>
                            <DisplayCategories  title="cooking"/>
                            <DisplayCategories  title="fashion"/>
                            <DisplayCategories  title="fitness"/>
                            <DisplayCategories  title="gaming"/>
                        </View>
                        <View className="flex-row mb-16">
                            <DisplayCategories  title="keyboard" onPress={ kbRoute }/>
                            <DisplayCategories  title="photography"/>
                            <DisplayCategories  title="technology"/>
                            <DisplayCategories  title="other"/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        paddingBottom: 200,
    },

    spacing: {
        borderBottomWidth: 25,
        borderBottomColor: "transparent",
    }
})