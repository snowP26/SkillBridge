import { Text, ScrollView, StyleSheet, Dimensions, Alert, SafeAreaView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Onboarding from "@/components/Onboarding";
import Button from "@/components/Buttons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../FirebaseConfig";
import { useRouter } from "expo-router";

export default function Index() {

    const router = useRouter(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = async() => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try{
            const user = await createUserWithEmailAndPassword(auth, email, password)
            if(user) router.replace('/(tabs)');
        } catch(error: any) {
            alert("Register failed: " + error.message)
        }
    }

    return (
        <LinearGradient
            colors={ ["#00072D", "#00072D", "#00072D", "#00072D", "#0A2472", "#0A2472"] } 
            style={ styles.background }
        >
            <Onboarding mainHeader="Create an Account" subHeader="Start your hobbyist journey. Join us. "/>
            <ScrollView>
            <SafeAreaView>
                {/* <Text style={ styles.header }>Register</Text> */}
                <SafeAreaView>
                    {/* input boxes */}
                <TextInput
                    style={ styles.input }
                    placeholder="Email"
                    placeholderTextColor={"rgba(255, 255, 255, 0.3)"}
                    underlineColorAndroid={"transparent"}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                />
                <TextInput
                    style={ styles.input }
                    placeholder="Username"
                    placeholderTextColor={"rgba(255, 255, 255, 0.3)"}
                    underlineColorAndroid={"transparent"}
                />

                {/* add line break for first name last name */}
                
                <TextInput
                    style={ styles.input }
                    placeholder="First Name"
                    placeholderTextColor={"rgba(255, 255, 255, 0.3)"}
                    underlineColorAndroid={"transparent"}

                />

                {/* end line break */}

                <TextInput
                    style={ styles.input }
                    placeholder="Password"
                    placeholderTextColor={"rgba(255, 255, 255, 0.3)"}
                    underlineColorAndroid={"transparent"}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={ styles.input }
                    placeholder="Confirm Password"
                    placeholderTextColor={"rgba(255, 255, 255, 0.3)"}
                    underlineColorAndroid={"transparent"}
                    secureTextEntry={true}
                    onChangeText={setConfirmPassword}
                />
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={ styles.button }>
                <Button label="Register" onPress={register}/>
            </SafeAreaView>
            </ScrollView>
            
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        width: Dimensions.get("window").width, 
        height: Dimensions.get("window").height,
    },
    header: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white",
        marginLeft: 25,
    },
    button: {
        alignContent: "center",
        alignItems: "center",
        marginTop: 25,
    },
    input: {
        paddingLeft: 12.5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#FFFFFF",
        width: '90%',
        alignSelf: "center",
        color: "#D4D4D4",
        paddingTop: 40,
        fontSize: 16,
    },
});