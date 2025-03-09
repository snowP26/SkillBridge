import { Text, View, StyleSheet, Dimensions, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Onboarding from "@/components/Onboarding";
import Button from "@/components/Buttons";

export default function Index() {
    return (
        <LinearGradient
                    colors={ ["#00072D", "#0A2472", "#0A2472", "#0A2472"] } 
                    style={ styles.background }
                >
                    <Onboarding mainHeader="Create an Account" subHeader="Start your hobbyist journey. Join us. "/>
                    <View>
                        <Text>Register</Text>
                    </View>
                    <View style={ styles.button }>
                        <Button label="Register"/>
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