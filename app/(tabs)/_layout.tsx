import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { House, MessagesSquare, Heart, CircleUserRound  } from "lucide-react-native";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: () => <House />
                }}
            />
        </Tabs>
    )
} 