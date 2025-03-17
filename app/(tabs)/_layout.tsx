import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import { House, MessagesSquare, BadgePlus, Heart, CircleUserRound} from "lucide-react-native";
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
                    tabBarIcon: ( {color} ) => <House color={ color }/>,
                }}
            />

            <Tabs.Screen
                name="inbox"
                options={{
                    tabBarLabel: "Inbox",
                    tabBarIcon: ( {color} ) => <MessagesSquare color={ color }/>,
                }}
            />
            
            <Tabs.Screen
                name="create"
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ( {focused} ) => (
                        <View style={{
                            borderBottomWidth: 10,
                            borderBottomColor: "transparent",
                        }}>
                            <View
                                style={{
                                    width: 91,
                                    height: 91,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#A6E1FA",
                                    borderRadius: "100%",
                                }}
                            >
                                <BadgePlus color={ focused ? "white" : "#0E6BA8" } size={66}/>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: focused ? "white" : "#0E6BA8",
                                        fontWeight: "bold",
                                        
                                    }}
                                >Create</Text>
                            </View>
                    </View>
                    ),
                    
                }}
            />

            <Tabs.Screen
                name="favorites"
                options={{
                    tabBarLabel: "Favorites",
                    tabBarIcon: ( {color} ) => <Heart color={ color }/>,
                }}
            />
            
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ( {color} ) => <CircleUserRound color={ color }/>,
                }}
            />

        </Tabs>
    )
} 