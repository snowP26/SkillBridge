import { View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from "expo-router";
import { images } from '@/constants/images/images';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
    category: string;
}


const imgPicker = (category: string) => {
    switch (category) {
        case "Audiophilia":
            return images.audiophilia;
        case "Automobiles":     
            return images.automobile;
        case "BoardGames":
            return images.boardgame;    
        case "Brewing":
            return images.brewing;
        case "Cooking":
            return images.cooking;
        case "Fashion":
            return images.fashion;
        case "Fitness": 
            return images.fitness;
        case "Gaming":
            return images.gaming;
        case "Keyboard":
            return images.keyboard;
        case "Other":
            return images.other;
        case "Photography":
            return images.photography;
        case "Technology":
            return images.technology;
        default:
            return images.other;
        }
    }

export default function CategoryBanner({ category }: Props){
    const router = useRouter();
    return (
        <ImageBackground source={imgPicker(category)} className='w-full h-[200px] bg-cover bg-center' resizeMode='cover'>
            <SafeAreaView className='flex-1 px-[15px] py-[20px]'>
                <View className="relative flex-row items-center justify-between px-4 mt-2 mb-8">
                    <TouchableOpacity onPress={ () => router.back() } className="z-10">
                        <ArrowLeft color="#A6E1FA" />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput 
                        placeholder="Search for jobs in this category..."
                        placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
                        underlineColorAndroid={"transparent"}
                        className="border-1 border-white bg-white p-5 h-[47px] rounded-[10px]"
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>

    )
}