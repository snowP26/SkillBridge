import { View, Text, TouchableOpacity } from 'react-native'
import { CircleUserRound, Heart } from "lucide-react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
    jobTitle: string;
    Location: string;
    dueDate: string;
    Author: string;
    time: string;
    onPress?: any;
    isNego: boolean;
    Price: number;
}

export default function DisplayListings({ jobTitle, Location, dueDate, Author, time, onPress, isNego, Price }: Props){
    return (
        <TouchableOpacity onPress={onPress}>
            <View className="h-[1px] bg-white w-[90%] self-center my-1.5" />
                <View className='max-w-[360px] ml-5 my-3'>
                    <Text className='text-white font-bold text-xl mb-2'>{ jobTitle }</Text>
                    {/* Start of bottom part */}
                    <View className="flex flex-row">
                        <CircleUserRound color="white" size="70"/>
                        <View className="flex-col ml-2">
                            <View className="flex-row mt-1">
                                <View className="bg-[#2C3E50] px-3 py-2 rounded-full mr-1">
                                    <Text className="text-white text-sm">{ Location }</Text>
                                </View>
                                <View className="bg-[#2C3E50] px-3 py-2 rounded-full">
                                    <Text className="text-white text-sm">{ dueDate }</Text>
                                </View>
                            </View>
                            <Text className='text-white mt-4 text-xs'>Posted by { Author } { time } ago</Text>                        
                        </View>
                        <View className='bg-[#001C55] rounded-full h-[50px] w-[95px] flex-col items-center justify-center'>
                            <Text className='text-[#A6E1FA] font-bold text-xl'>PHP { Price }</Text>
                            {isNego ? (<Text className='text-white text-[8px]'>Negotiable</Text>) : (<Text className='text-white text-xs'>Fixed</Text>)}
                        </View>
                    </View>                
                </View>



            <View className="h-[1px] bg-white w-[90%] self-center my-1.5" />
        </TouchableOpacity>
    );
}