import { StyleSheet, View, Pressable, Text, Dimensions } from 'react-native';

type Props = {
    label: string;
    theme?: 'secondary';
}


export default function Button( {label, theme}: Props ){
    if (theme == 'secondary'){
        return (
            <Pressable style={[ styles.container, { backgroundColor: "#A6E1FA", borderColor: "white" } ]}>
                <Text style={ styles.label }>{ label }</Text>
            </Pressable>
        )
    }

    return(
        <Pressable style={[ styles.container, { backgroundColor: "white" } ]}>
            <Text style={ styles.label }>{ label }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    container: {
        width: Dimensions.get("window").width*0.9,
        height: Dimensions.get("window").height*0.055,
        alignItems: "center",
        borderColor: "#2C2C2C",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 10,
    },

    label: {
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
    }

})