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
import DisplayListings from "@/components/DisplayListings";
import { useRouter } from "expo-router";

export default function categoryListings(){
    const router = useRouter();

    return (
        <LinearGradient
            colors={ ["#00072D", "#00072D", "#00072D", "#00072D", "#0A2472", "#0A2472"] } 
            style={ styles.background }
        >
            <CategoryBanner category="Keyboard" />
            <Text className="text-[#B9D7FF] font-extrabold text-[40px] self-center my-3">
                Custom Keyboards
            </Text>
            <Text className="text-white my-1 ml-4">
                Sorted by: Recent Listings
            </Text>
            <DisplayListings
                jobTitle="I need someone to mod my keyboard"
                Location="Naga City"
                dueDate="26 April 2025"
                Author="Robert Chase"
                time="12 hours"
                onPress={() => router.push("/(tabs)/homeChildren/keybCat")}
                isNego={false}
                Price={500}
            />
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