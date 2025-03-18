import ImageViewer from "./ImageViewer";
import { View, StyleSheet, Text } from "react-native";

type Props = {
    title: string;
    onPress?: () => void;
}

const categories = [
    {
        title: "Audiophilia",
        image: require("../assets/images/categories/audiophilia.png")
    },
    {
        title: "Automobiles",
        image: require("../assets/images/categories/Automobile.png")
    },
    {
        title: "Board Games",
        image: require("../assets/images/categories/boardgame.png")
    },
    {
        title: "Brewing",
        image: require("../assets/images/categories/brewing.png")
    },
    {
        title: "Cooking",
        image: require("../assets/images/categories/cooking.png")
    },
    {
        title: "Fashion",
        image: require("../assets/images/categories/fashion.png")
    },
    {
        title: "Fitness",
        image: require("../assets/images/categories/fitness.png")
    },
    {
        title: "Gaming",
        image: require("../assets/images/categories/gaming.png")
    },
    {
        title: "Keyboard",
        image: require("../assets/images/categories/keyboard.png")
    },
    {
        title: "Other",
        image: require("../assets/images/categories/other.png")
    },
    {
        title: "Photography",
        image: require("../assets/images/categories/photography.png")
    },
    {
        title: "Technology",
        image: require("../assets/images/categories/technology.png")
    },
]

export default function DisplayCategories( {title, onPress }: Props ){
    if(title == 'audiophilia'){
        const cat = categories[0]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }else if(title == 'automobile'){
        const cat = categories[1]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }else if(title == 'boardgame'){
        const cat = categories[2]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
        
    }else if(title == 'brewing'){
        const cat = categories[3]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }else if(title == 'cooking'){
        const cat = categories[4]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }else if(title == 'fashion'){
        const cat = categories[5]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }else if(title == 'fitness'){
        const cat = categories[6]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }else if(title == 'gaming'){
        const cat = categories[7]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }
    else if(title == 'keyboard'){
        const cat = categories[8]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }else if(title == 'other'){
        const cat = categories[9]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }else if(title == 'photography'){
        const cat = categories[10]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }else if(title == 'technology'){
        const cat = categories[11]
        return(
            <View style={ styles.container }>
                <ImageViewer imgSource={ cat.image } type="category" onPress={ onPress } />
                <Text style={ styles.text }>{ cat.title }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
    },
    text: {
        color: "white",
        marginTop: 4,
    }
})