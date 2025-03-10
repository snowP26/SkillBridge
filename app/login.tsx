/* 
Authored by: James Gabriel Verceluz
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SB-003] Log In Screen
Description: A screen where the user can Log In into their account
 */
import { Text, View, StyleSheet, Dimensions, Alert, SafeAreaView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Link } from "expo-router";
import { EyeClosed, MapPin } from "lucide-react-native";
import Onboarding from "@/components/Onboarding";
import Button from "@/components/Buttons";
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function Login() {

    const router = useRouter();
    const backButton = () => {
        router.back();
    }

    const loginButton = () => {
        router.push("/(tabs)");
    }

    return (
        <LinearGradient
            colors={ ["#00072D", "#0A2472", "#0A2472", "#0A2472"] } 
            style={ styles.background }
        >
            <Onboarding mainHeader="Welcome Back!" subHeader="Continue to do what you love."/>
            <View>
                <Text style={ styles.header }>Log In</Text>
                <SafeAreaView>
                    <TextInput
                        style={ styles.input }
                        placeholder="Email or Username"
                        placeholderTextColor={"#D4D4D4"}
                        underlineColorAndroid={"transparent"}
                        keyboardType="email-address"
                    />
                </SafeAreaView>
                <SafeAreaView>
                    <TextInput
                        style={ styles.input }
                        placeholder="Enter Password"
                        placeholderTextColor={"#D4D4D4"}
                        underlineColorAndroid={"transparent"}
                        secureTextEntry={true}
                    />
                    
                </SafeAreaView>
            </View>
            <SafeAreaView style={ styles.checkbox }>
                <BouncyCheckbox 
                    size={15}
                    onPress={(isChecked: boolean) => {}} 
                    fillColor="#A6E1FA"
                    unFillColor="white"
                    text="Remember Me"
                    disableText={true}
                    
                />
                <Text style={ styles.cbText }>Remember Me</Text>
            </SafeAreaView>
            
            <SafeAreaView style={ styles.button }>
                <Button onPress={loginButton} label="Log In"/>
            </SafeAreaView>
            <SafeAreaView style={styles.fpContainer}>
                <Link href="/forgotpassword" style={styles.fPassword}>Forgot Password?</Link>
            </SafeAreaView>
            
            
            

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
        alignItems: "center",
        alignContent: "center",
        borderTopWidth: 20,
        borderTopColor: "transparent",
    },
    header: {
        fontWeight: "bold",
        fontSize: 50,
        color: "white",
        marginLeft: 25,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#FFFFFF",
        width: '90%',
        alignSelf: "center",
        color: "#D4D4D4",
        paddingTop: 40,
    },
    checkbox: {
        marginTop: 10,
        marginLeft: 25,
        flexDirection: "row",

    },
    cbText: {
        color: "white",
        fontSize: 14,
        marginLeft: 5,
    },
    
    fpContainer: {
        flexDirection: "row-reverse"
    },
    fPassword: {
        color: "white",
        marginRight: 25,
    },
});