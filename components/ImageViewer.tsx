import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity } from "react-native";


type Props = {
    imgSource: any;
    type?: string;
    onPress?: any;
};

export default function ImageViewer({ imgSource, type, onPress }: Props) {

    switch (type) {
        case "category":
            return(
                <TouchableOpacity onPress={onPress}>
                    <Image source={imgSource} style={styles.categories}/>
                </TouchableOpacity>
            );
            break;

        case "icon":
            return (
                <Image source={imgSource} style={ styles.icon }/>
            );
            break;

        case "chatIcon":
            return(
                <Image source={imgSource} style={ styles.chat } />
            );
            break;

        default:
            break;
    } 
}

const styles = StyleSheet.create({
    icon: {
        width: 65,
        height: 65,
        borderRadius: 100,
        marginLeft: 4,
    },
    categories: {
        width: 85,
        height: 100,
        borderRadius: 15,
    },
    chat: {
        width: 50,
        height: 50,
        borderRadius: 100,
    }
})