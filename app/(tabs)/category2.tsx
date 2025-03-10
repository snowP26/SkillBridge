/* 
Authored by: Almond Nicholas Turiano
Company: Ninjas In Paris
Project: SkillBridge
Feature: [SS012] - Listing Screen
Description: A screen for the full details of a listing
 */

import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from "react-native";
import { MapPin, CalendarClock, CircleUserRound, ArrowLeft, Heart } from "lucide-react-native";

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

export default function Category2() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/ff/d1/af/ffd1af7d8daeaef15ad9fcb9c1dbd8aa.jpg",
          }}
          style={styles.banner}
        />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.headerContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{jobData.title}</Text>
          <Heart size={24} />
        </View>
        <View style={styles.userInfo}>
          <CircleUserRound size={75} />
          <View style={styles.userText}>
            <View style={styles.locationContainer}>
              <MapPin />
              <Text style={styles.location}>{jobData.location}</Text>
            </View>
            <View style={styles.dateContainer}>
              <CalendarClock />
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
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A2A5C" },
  banner: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    padding: 5,
  },
  headerContent: { padding: 15 },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 18, fontWeight: "bold", color: "white", flex: 1 },
  userInfo: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  userText: { marginLeft: 10 },
  locationContainer: { flexDirection: "row", alignItems: "center" },
  dateContainer: { flexDirection: "row", alignItems: "center", marginTop: 3 },
  location: { color: "#A9C7FF", marginLeft: 10 },
  date: { color: "#A9C7FF", fontSize: 12, marginLeft: 10 },
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
  priceText: { fontSize: 18, fontWeight: "bold", color: "white" },
  messageButton: { backgroundColor: "white", paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5 },
  messageText: { fontWeight: "bold", color: "#0A2A5C" },
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
  description: { fontSize: 14, color: "white" },
  listItem: { fontSize: 14, color: "white", marginTop: 5 },
});

