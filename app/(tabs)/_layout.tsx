import { Tabs } from "expo-router";
import { House } from "lucide-react-native";
import '../globals.css';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: "#4BD8FF",
            tabBarInactiveTintColor: "#FFFFFF",
            headerShown: false, 
            tabBarStyle:{
                backgroundColor: "#0E6BA8",
            } 
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ( {color} ) => <House color={ color }/> ,

                }}
            />
        </Tabs>
    )
} 