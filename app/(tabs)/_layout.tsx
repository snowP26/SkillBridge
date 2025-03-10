import { Tabs } from "expo-router";
import { House } from "lucide-react-native";

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

            {/* 
                Category 2 tabs. screen is temporary and is used only for navigation to check 
                the screen created.
            */}

            <Tabs.Screen
                name="category2"
                options={{
                    tabBarLabel: "cat2",
                    tabBarIcon: ( {color} ) => <House color={ color }/>
                }}
                />
        </Tabs>
    )
} 