import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from "expo-router";

type Props = {
    header: string;
}

export default function tabsBanner({ header }: Props){
    const router = useRouter();
    const backButton = () => {
        router.back();
    }
    return (
        <View className="relative flex-row items-center justify-between px-4 mt-2 mb-8">
      <TouchableOpacity onPress={ backButton } className="z-10">
        <ArrowLeft color="white" />
      </TouchableOpacity>

      <View className="absolute left-0 right-0 items-center">
        <Text className="text-[32px] font-black text-[#B9D7FF] text-center">{ header }</Text>
      </View>

      {/* Spacer to match the back button width for symmetry */}
      <View className="w-6" />
    </View>
    )
}