import { StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";

type Props = {
    imgSource: string;
    style?: any;
};

export default function ImageViewer({ imgSource, style }: Props){
    return <Image source={ imgSource } style={ style } />;
}
