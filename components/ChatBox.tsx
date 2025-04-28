import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import ImageViewer from './ImageViewer';
import { useState } from 'react';

type Props = {
    photo: any;
    name: string;
    snippet: string;
    time: string;
    onPress?: any;
}

export default function ChatBox ({ photo, name, snippet, time}: Props) {

    const [isRead, setIsRead] = useState(false)

    const isReadState = () => {
        setIsRead((prev) => (!prev))
    }

    return (
        <TouchableOpacity className='bg-[#00072D] h-[84px] w-[350px] self-center rounded-[20px] mb-2 flex-row items-center px-6' onPress={isReadState}>
            <ImageViewer imgSource={ photo } type="chatIcon"/>
            <View className='flex-col ml-4'>
                <Text className='text-[#A6E1FA] text-xl mb-1 font-extrabold'>{ name }</Text>
                <View className='flex-row'>
                    <Text 
                        className={`text-sm max-w-32 
                                    ${isRead 
                                    ? `text-white`
                                    : `text-[#9C9C9C]`
                                    }
                                    `}
                        numberOfLines={1} 
                        ellipsizeMode='tail'>
                            { snippet }
                    </Text>
                    <View className={`h-1 w-1 rounded-full self-center mx-2 ${isRead ? `bg-white` : `bg-[#9C9C9C]`}`} />
                    <Text 
                        className={`text-sm 
                            ${isRead 
                            ? `text-white`
                            : `text-[#9C9C9C]`
                            }
                            `}>
                        { time } ago
                    </Text>
                </View>                 
            </View>

            {isRead && (
                <View className="h-3 w-3 bg-green-400 rounded-full ml-auto" />
            )} 
        </TouchableOpacity>
    )
}