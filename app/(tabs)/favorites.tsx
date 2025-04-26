import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MoveLeft } from "lucide-react-native";
import DisplayFavorites from '@/components/DisplayFavorites';
import TabsBanner from '@/components/TabsBanner';

const Favorites = () => {
  return (
    <LinearGradient
      colors={["#00072D", "#0A2472", "#0A2472"]}
      style={styles.background}
    >
      <SafeAreaView className='flex-1 px-[15px] py-[20px]'>

        <TabsBanner header="Favorites"/>

        <View className="w-[90%] self-center mb-[10px] mt-10">
          <Text className="text-white text-[16px]">Sort by: Last Favorited</Text>
        </View>

        <DisplayFavorites 
          jobTitle="I need someone to mod my keyboard"
          Location="Naga City"
          dueDate="26 March 2025"
          Author="Robert Chase"
          time="12 mins ago"
        />
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
  }
})

