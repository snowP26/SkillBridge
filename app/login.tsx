/* 
Authored by: James Gabriel Verceluz
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SB-003] Log In Screen
Description: A screen where the user can Log In into their account
 */
import { Text, View, StyleSheet, Dimensions, SafeAreaView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Link } from "expo-router";
import Onboarding from "@/components/Onboarding";
import Button from "@/components/Buttons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";



export default function Login() {
    const router = useRouter();

    const regRoute = () => {
        router.replace("/register");
    }
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async() => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            if(user) router.replace("/(tabs)")
        } catch (error: any) {
            console.log(error)
            alert("Sign In failed: " + error.message)
        }
    }

    
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
                <Text style={ styles.header }>Log In</Text>
                <SafeAreaView>
                    <TextInput
                        style={ styles.input }
                        placeholder="Email"
                        value={email}
                        placeholderTextColor={"#D4D4D4"}
                        underlineColorAndroid={"transparent"}
                        keyboardType="email-address"
                        onChangeText={setEmail}
                    />
                </SafeAreaView>
                <SafeAreaView>
                    <TextInput
                        style={ styles.input }
                        placeholder="Enter Password"
                        placeholderTextColor={"#D4D4D4"}
                        underlineColorAndroid={"transparent"}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    
                </SafeAreaView>
            </View>
            <SafeAreaView style={ styles.checkbox } className="mb-6">
                <BouncyCheckbox 
                    size={15}
                    onPress={(isChecked: boolean) => {}} 
                    fillColor="#A6E1FA"
                    unFillColor="white"
                    text="Remember Me"
                    disableText={true}
                    
                />
                <Text style={ styles.cbText }>Remember Me</Text>
                <Link style={ styles.cbText2 } href="/register">Forgot Password?</Link>
            </SafeAreaView>
            
            <SafeAreaView style={ styles.button }>
                <Button onPress={signIn} label="Log In"/>
            </SafeAreaView>
            <SafeAreaView className="content-center items-center">
                <SafeAreaView className="flex-row items-center w-[90%] content-center my-[10px]">
                    <View className="flex-1 h-[1px] bg-white mx-[10px]" />
                        <Text className="text-white font-bold">OR</Text>
                    <View className="flex-1 h-[1px] bg-white mx-[10px]" />
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={ styles.button }>
                <Button onPress={ regRoute } label="Register" theme="secondary"/>
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
        paddingLeft: 12.5,
        fontSize: 14, 
        marginBottom: 5,
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
        flex: 1,
    },
    cbText2: {
        color: "white",
        fontSize: 14,
        marginRight: 25,
    },
});