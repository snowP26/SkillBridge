import { StyleSheet, View, Pressable, Text, Dimensions, SafeAreaView } from 'react-native';
import { MoveLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

type Props = {
    mainHeader: string;
    subHeader: string;
}

export default function Onboarding( {mainHeader, subHeader}: Props ){
    const router = useRouter();
    const backButton = () => {
        router.back();
    }

    return(
        <View style={ styles.headerContainer }>
            <SafeAreaView style={ styles.backButton }>
                <MoveLeft size={40} color={"black"} onPress={ backButton }/>
            </SafeAreaView>
            <SafeAreaView style={ styles.headerText }>
                <Text style={ styles.mainHeader }>{ mainHeader }</Text>
                <Text style={ styles.subHeader }>{ subHeader }</Text>                    
            </SafeAreaView>
        </View>
    );
}
const styles = StyleSheet.create({
    backButton: {
        marginLeft: 30,
        marginTop: 60,
    },
    headerContainer: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height/3,
        backgroundColor: "#F0EBD8",
        borderBottomLeftRadius: 80,
    },
    headerText: {
        marginTop: 10,
        marginLeft: 50,
    },
    mainHeader: {
        fontWeight: "800",
        maxWidth: 200,
        fontSize: 40,
    },
    subHeader: {
        marginTop: 10,
        fontWeight: "500",
    }
});