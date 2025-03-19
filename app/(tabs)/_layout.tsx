import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import { House, MessagesSquare, Plus, Heart, CircleUserRound} from "lucide-react-native";
import '../globals.css';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: "#4BD8FF",
            tabBarInactiveTintColor: "#FFFFFF",
            headerShown: false, 
            tabBarStyle:{
                backgroundColor: "#0E6BA8",
                borderTopWidth: 0,
                elevation: 0,  
                shadowOpacity: 0,
                paddingTop: 5,
            } 
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ( {color} ) => <House color={ color }/>,
                }}
            />

            <Tabs.Screen name="homeChildren" options={{ href: null }} />
            

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
                        <View  >
                            <View
                                style={{
                                    width: 80,
                                    height: 45,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#A6E1FA",
                                    borderRadius: 100,
                                    marginTop: 10,
                                    overflow: "hidden",
                                    
                                }}
                            >
                                <Plus color={ focused ? "white" : "#0E6BA8" } size={30}/>
                                <Text
                                    style={{
                                        fontSize: 8,
                                        color: focused ? "white" : "#0E6BA8",
                                        fontWeight: "300",
                                        paddingBottom: 3,
                                    }}
                                >Post</Text>
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