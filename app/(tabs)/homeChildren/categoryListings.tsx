import { 
    TouchableWithoutFeedback, 
    Platform, 
    Keyboard, 
    ScrollView, 
    StyleSheet, 
    Dimensions, 
    KeyboardAvoidingView, 
    SafeAreaView, 
    TextInput, 
    Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CategoryBanner from "@/components/CategoryBanner";

export default function categoryListings(){
    return (
        <LinearGradient
            colors={ ["#00072D", "#00072D", "#00072D", "#00072D", "#0A2472", "#0A2472"] } 
            style={ styles.background }
        >
            <CategoryBanner category="Keyboard" />
            <Text className="text-[#B9D7FF] font-extrabold text-[40px] self-center mt-6">
                Custom Keyboards
            </Text>
            <Text>
                Sorted by: Recent Listings
            </Text>
        </LinearGradient>
    );

}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        width: Dimensions.get("window").width, 
        height: Dimensions.get("window").height,
    },
});