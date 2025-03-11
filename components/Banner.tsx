import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";

type Props = {
    link: any;
    
}



export default function Banner( { link }: Props ) {

    const navigation = useNavigation();

    return (
        <View style={ styles.bannerContainer }>
        <Image
            source={ link }
            style={styles.banner}
        />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    bannerContainer : {
        height: Dimensions.get("window").height*0.225,
    },
    
    backButton: {
        position: "absolute",
        top: 15,
        left: 15,
        padding: 5,
    },
    banner: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

})
