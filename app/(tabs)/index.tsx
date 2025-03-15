/* 
Authored by: James Gabriel Verceluz
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SS004] - Home Screen
Description: A screen where the user can view all the categories of help we want to offer.
 */

import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { useRouter, Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import ImageViewer from "@/components/ImageViewer";



export default function Categories() {

    
    const profileIcon = require("../../assets/images/ghouse.png");
    const router = useRouter();

    const kbRoute = () => {
        router.push("../categories/keybCat");
    }



    return(
        <LinearGradient 
            colors={["#00072D", "#0A2472", "#0A2472", "#0A2472"]}
            style={ styles.background }
        >
            {/* Safe Area View for iOS */}
            <SafeAreaView className="mx-[15px]">
                {/* View for header of homepage. */}
                <View className="flex-row mt-5">
                    <ImageViewer imgSource= { profileIcon } type="icon"/> 
                    <ScrollView className="ml-5 flex-col">
                        <Text className="text-white">Good Evening!</Text>
                        <Text className="text-[#A6E1FA] font-extrabold text-[25px]">Gregory House</Text>
                    </ScrollView>
                    
                </View>

                {/* Search bar */}
                <View className="mt-[46px] mb-[26px]">
                    <TextInput 
                        placeholder="Search for services, skills, or freelancers..."
                        placeholderTextColor={"#D4D4D4"}
                        underlineColorAndroid={"transparent"}
                        className="border-1 border-white bg-white p-5  h-[47px] rounded-[10px]"
                    />
                </View>

                {/* Main Content */}
                <ScrollView className="flex-col">
                    <View>
                        {/* Recommended For You */}
                        <Text className="text-[#A6E1FA] font-extrabold text-[25px]">Recommended For You</Text>
                        <View className="flex-row mb-16">
                            <View className="flex-col items-center">
                                <ImageViewer imgSource={require("../../assets/images/categories/keyboard.png")} type="category" onPress={kbRoute}/>
                                <Text className="text-white mt-1">Keyboards</Text>
                            </View>
                            <View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/gaming.png")} type="category"/>
                                <Text className="text-white mt-1">Gaming</Text>
                            </View>
                            <View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/technology.png")} type="category"/>
                                <Text className="text-white mt-1">Technology</Text>
                            </View><View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/Automobile.png")} type="category"/>
                                <Text className="text-white mt-1">Automobile</Text>
                            </View>
                        </View>


                        {/* What's Hot */}
                        <Text className="text-[#A6E1FA] font-extrabold text-[25px]">What's Hot</Text>
                        <View className="flex-row mb-16">
                            <View className="flex-col items-center">
                                <ImageViewer imgSource={require("../../assets/images/categories/keyboard.png")} type="category" onPress={kbRoute}/>
                                <Text className="text-white mt-1">Keyboards</Text>
                            </View>
                            <View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/gaming.png")} type="category"/>
                                <Text className="text-white mt-1">Gaming</Text>
                            </View>
                            <View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/technology.png")} type="category"/>
                                <Text className="text-white mt-1">Technology</Text>
                            </View><View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/Automobile.png")} type="category"/>
                                <Text className="text-white mt-1">Automobile</Text>
                            </View>
                        </View>
                        

                        {/* All Categories */}
                        <Text className="text-[#A6E1FA] font-extrabold text-[25px]">All Categories</Text>
                        <View className="flex-row ">
                            <View className="flex-col items-center">
                                <ImageViewer imgSource={require("../../assets/images/categories/keyboard.png")} type="category" onPress={kbRoute}/>
                                <Text className="text-white mt-1">Keyboards</Text>
                            </View>
                            <View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/gaming.png")} type="category"/>
                                <Text className="text-white mt-1">Gaming</Text>
                            </View>
                            <View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/technology.png")} type="category"/>
                                <Text className="text-white mt-1">Technology</Text>
                            </View><View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/Automobile.png")} type="category"/>
                                <Text className="text-white mt-1">Automobile</Text>
                            </View>
                        </View>

                        <View className="flex-row">
                            <View className="flex-col items-center">
                                <ImageViewer imgSource={require("../../assets/images/categories/keyboard.png")} type="category"/>
                                <Text className="text-white mt-1">Keyboards</Text>
                            </View>
                            <View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/gaming.png")} type="category"/>
                                <Text className="text-white mt-1">Gaming</Text>
                            </View>
                            <View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/technology.png")} type="category"/>
                                <Text className="text-white mt-1">Technology</Text>
                            </View><View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/Automobile.png")} type="category"/>
                                <Text className="text-white mt-1">Automobile</Text>
                            </View>
                        </View>
                        <View className="flex-row mb-16">
                            <View className="flex-col items-center">
                                <ImageViewer imgSource={require("../../assets/images/categories/keyboard.png")} type="category"/>
                                <Text className="text-white mt-1">Keyboards</Text>
                            </View>
                            <View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/gaming.png")} type="category"/>
                                <Text className="text-white mt-1">Gaming</Text>
                            </View>
                            <View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/technology.png")} type="category"/>
                                <Text className="text-white mt-1">Technology</Text>
                            </View><View className="flex-col items-center ml-5">
                                <ImageViewer imgSource={require("../../assets/images/categories/Automobile.png")} type="category"/>
                                <Text className="text-white mt-1">Automobile</Text>
                            </View>
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
})