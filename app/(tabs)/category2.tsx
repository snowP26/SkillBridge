/* 
Authored by: Almond Nicholas Turiano
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SS012] - Listing Screen
Description: A screen for the full details of a listing
 */


import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions} from "react-native";
import { MapPin, CalendarClock, CircleUserRound, Heart } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import Banner from "@/components/Banner";
import '../globals.css';


const jobData = {
  title: "I need someone to mod my keyboard",
  location: "Naga City, Camarines Sur",
  postedDate: "Posted March 1",
  finishDate: "Due 26th of March 2025",
  price: "PHP 850",
  description:
    "I am looking for someone who can help me mod my keyboard. I currently own an Akko 5075s and here's the list of mods I want on my keyboard. \n \nI do not have any of the necessary tools needed to complete the mod but I am willing to pay extra for the things needed to mod my keyboard. I will also deliver my keyboard to you for the modding process. \n",
  mods: ["Polyfill mod", "Painter’s tape mod", "Switch lubing", "Stab replacement"],
};

const banner = require("../../assets/images/keyboard.png");

export default function Category2() {


  return (
    <LinearGradient
    colors={["#00072D", "#0A2472", "#0A2472", "#0A2472"]}
    style={styles.background}
  >
    <View style={styles.container}>
        <Banner link={require("../../assets/images/keyboard.png")}/>
        <View style={styles.headerContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{jobData.title}</Text>
            <Heart size={24} color={"white"} />
          </View>
          <View style={styles.userInfo}>
            <CircleUserRound size={75} color={"white"} />
            <View style={styles.userText}>
              <View style={styles.locationContainer}>
                <MapPin color={"white"} />
                <Text style={styles.location}>{jobData.location}</Text>
              </View>
              <View style={styles.dateContainer}>
                <CalendarClock color={"white"} />
                <Text style={styles.date}>{jobData.finishDate}</Text>
                <Text style={styles.date}>{jobData.postedDate}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <TouchableOpacity style={styles.priceButton}>
            <Text style={styles.priceText}>{jobData.price}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageText}>Message</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          ListHeaderComponent={<Text style={styles.description}>{jobData.description}</Text>}
          data={jobData.mods}
          renderItem={({ item }) => <Text style={styles.listItem}>• {item}</Text>}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({

  container: { 
    flex: 1 
  },



  background: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "white", 
    flex: 1 
  },


  userInfo: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 5 
  },

  userText: { 
    marginLeft: 10 
  },

  locationContainer: { 
    flexDirection: "row", 
    alignItems: "center" 
  },

  dateContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 3 
  },

  location: { 
    color: "#A9C7FF", 
    marginLeft: 10 
  },
  
  date: { 
    color: "#A9C7FF", 
    fontSize: 12, 
    marginLeft: 10 
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },

  priceButton: {
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },

  priceText: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "white" 
  },

  messageButton: { 
    backgroundColor: "white", 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 5 
  },

  messageText: { 
    fontWeight: "bold", 
    color: "#0A2A5C" 
  },

  flatListContainer: {
    backgroundColor: "#081E42",
    padding: 15,
    borderRadius: 10,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  description: { 
    fontSize: 14, 
    color: "white" 
  },

  listItem: { 
    fontSize: 14, 
    color: "white", 
    marginTop: 5 
  },

  

headerContent: {
  padding: 15
},

titleContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},
});

