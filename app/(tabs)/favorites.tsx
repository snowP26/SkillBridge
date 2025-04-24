import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { MoveLeft } from "lucide-react-native";
import { CircleUserRound, Heart } from "lucide-react-native";

const Favorites = () => {
  return (
    <LinearGradient
      colors={["#00072D", "#0A2472", "#0A2472"]}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>

        <View style={styles.headerRow}>
          <MoveLeft color="white" />
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Favorites</Text>
        </View>

        <View style={styles.sortContainer}>
          <Text style={styles.sortText}>Sort by: Last Favorited</Text>
        </View>

        <View style={styles.line} />
        <View style={styles.faveJobs}>
          <View style={styles.jobTitleContainer}>
            <Text style={styles.jobTitle}>I need someone to mod my keyboard</Text>
            <Heart size={24} color={"white"} />
          </View>

          <View style={styles.bubbleContainer}>
            <View style={[styles.bubble, styles.firstBubble]}>
              <Text style={styles.bubbleText}>Naga City</Text>
            </View>
            <View style={[styles.bubble, styles.secondBubble]}>
              <Text style={styles.bubbleText}>26 March 2025</Text>
            </View>
          </View>

          <View style={styles.iconAndText}>
            <CircleUserRound size={75} color={"white"} />
            <Text style={styles.postedText}>Posted by Robert Chase 12 mins ago</Text>
          </View>
        </View>
        <View style={styles.line} />

      </SafeAreaView>
    </LinearGradient>
  )
}

export default Favorites

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingBottom: 200,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "900",
    color: "white",
    textAlign: "center",
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  sortContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  sortText: {
    color: 'white',
    fontSize: 16,
  },
  faveJobs: {
    alignSelf: 'center',
    width: '90%',
    color: "white",
  },
  jobTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 10, 
  },
  bubbleContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  bubble: {
    backgroundColor: '#2C3E50',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  firstBubble: {
    marginRight: 5,
  },
  secondBubble: {},
  bubbleText: {
    color: 'white',
    fontSize: 14,
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  postedText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
  }
})
