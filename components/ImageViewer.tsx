import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity } from "react-native";


type Props = {
    imgSource: any;
    type?: string;
    onPress?: any;
};

export default function ImageViewer({ imgSource, type, onPress }: Props) {
    if(type == "category"){
        return(
            <TouchableOpacity onPress={onPress}>
                <Image source={imgSource} style={styles.categories}/>
            </TouchableOpacity>
        );
    }

    if(type == "icon"){
        return (
            <Image source={imgSource} style={ styles.icon }
        />);
    }
    
}

const styles = StyleSheet.create({
    icon: {
        width: 71,
        height: 71,
        borderRadius: 100,
    },
    categories: {
        width: 75,
        height: 120,
        borderRadius: 15,
    },
})