/* 
Authored by: James Gabriel Verceluz
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SB-003] Log In Screen
Description: A screen where the user can Log In into their account
 */
import { Text, View, StyleSheet, Dimensions, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Onboarding from "@/components/Onboarding";
import Button from "@/components/Buttons";


export default function Login() {

    const router = useRouter();
    const backButton = () => {
        router.back();
    }

    return (
        <LinearGradient
            colors={ ["#00072D", "#0A2472", "#0A2472", "#0A2472"] } 
            style={ styles.background }
        >
            <Onboarding mainHeader="Welcome Back!" subHeader="Continue to do what you love."/>
            <View>
                <Text>Log In</Text>
            </View>
            <View style={ styles.button }>
                <Button label="Log In"/>
            </View>
            

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        width: Dimensions.get("window").width, 
        height: Dimensions.get("window").height,
    },
    button: {
        alignContent: "center",
        alignItems: "center",
        
    }
});