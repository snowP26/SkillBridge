import { Text, View, StyleSheet, Dimensions, Alert, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

export default function Index() {
    return (
        <LinearGradient
                colors={ ["#00072D", "#0A2472", "#0A2472", "#0A2472"] } 
                style={ styles.background }
        >
            <View>
                <Text>Hello world</Text>
            </View>
        </LinearGradient>
        
    )}

    const styles = StyleSheet.create({
        background: {
                flex: 1, 
                width: Dimensions.get("window").width, 
                height: Dimensions.get("window").height,
            },
        })