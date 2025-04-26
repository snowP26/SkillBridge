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
    isNego: boolean;
}

export default function DisplayFavorites({ jobTitle, Location, dueDate, Author, time, onPress, isNego }: Props){
    return (
        <TouchableOpacity onPress={onPress}>
            <View className="h-[1px] bg-white w-[90%] self-center my-1.5" />
            <CircleUserRound color="white" size="35"/>
            <View className="flex-row mt-1">
                <View className="bg-[#2C3E50] px-4 py-2 rounded-full mr-2">
                    <Text className="text-white text-sm">{ Location }</Text>
                </View>
                <View className="bg-[#2C3E50] px-4 py-2 rounded-full">
                    <Text className="text-white text-sm">{ dueDate }</Text>
                </View>
                <View className="bg-[#0A2472] px-4 py-2 rounded-full">
                    <Text className="text-[#A6E1FA] text-[18px] font-bold">{ dueDate }</Text>
                    if(isNego){
                        <Text className="text-[#A6E1FA] text-[8px]">Negotiable</Text>
                    } else {
                        <Text className="text-[#A6E1FA] text-[8px]">Fixed</Text>
                    }
                </View>
            </View>
            <View className="h-[1px] bg-white w-[90%] self-center my-1.5" />
        </TouchableOpacity>
    );
}