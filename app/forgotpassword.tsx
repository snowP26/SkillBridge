import { SafeAreaView, Text } from "react-native";
import { MoveLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();

    const backButton = () => {
        router.back();
    }

    return (
        <SafeAreaView>
            <MoveLeft size={40} color={"black"} onPress={ backButton }/>
            <Text>Click the arrow button to go back.</Text>
        </SafeAreaView>
        
        
    )}
