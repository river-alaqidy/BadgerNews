import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BadgerNewsItemCard(props) {

    const navigation = useNavigation();

    const readArticle = () => {
        navigation.push("Article", {...props})
    }

    return <Pressable style={styles.card} onPress={readArticle}>
        <View>
        <Image 
            style={{
                width: 325,
                height: 250
            }}
            source={{uri: `https://raw.githubusercontent.com/CS571-S24/hw8-api-static-content/main/${props.img}`}}>
        </Image>
        <Text style={styles.title}>{props.title}</Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    card: {
        padding: 12,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        margin: 8
    },
    title: {
        fontSize: 24, 
        marginTop: 8, 
    }
})