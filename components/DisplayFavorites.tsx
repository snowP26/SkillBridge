import { View, Text, TouchableOpacity } from 'react-native'
import { CircleUserRound, Heart } from "lucide-react-native";
import React from 'react'

type Props = {
    jobTitle: string;
    Location: string;
    dueDate: string;
    Author: string;
    time: string;
    onPress?: any;
}

export default function DisplayFavorites({ jobTitle, Location, dueDate, Author, time, onPress }: Props){
    return(
        <TouchableOpacity onPress={onPress}>
            <View className="h-[1px] bg-white w-[90%] self-center my-1.5" />
            
            <View className="self-center w-[90%]">
              <View className="flex-row items-center mb-3">
                <Text className="text-white text-lg font-semibold mr-2">{ jobTitle }</Text>
                <Heart size={24} color="white" />
              </View>

              <View className="flex-row mt-1">
                <View className="bg-[#2C3E50] px-4 py-2 rounded-full mr-2">
                  <Text className="text-white text-sm">{ Location }</Text>
                </View>
                <View className="bg-[#2C3E50] px-4 py-2 rounded-full">
                  <Text className="text-white text-sm">{ dueDate }</Text>
                </View>
              </View>

              <View className="flex-row items-center mt-1">
                <CircleUserRound size={75} color="white" />
                <Text className="text-white text-sm ml-2">Posted by { Author } { time }</Text>
              </View>
            </View>

            <View className="h-[1px] bg-white w-[90%] self-center my-1.5" /> 
        </TouchableOpacity>
    );
}
