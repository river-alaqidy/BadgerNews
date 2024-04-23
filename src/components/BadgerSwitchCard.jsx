import { View, StyleSheet, Text, Switch } from "react-native";
import { useState } from "react";

export default function BadgerSwitchCard(props) {

    const [isEnabled, setIsEnabled] = useState(true);

    const toggleSwitch = () => {
        setIsEnabled(prev => !prev);
        props.changePref(props.tagName, !isEnabled)
    }
    
    return <View style={styles.card}>
        <Text style={styles.title}>Currently {isEnabled ? "" : "NOT "}showing <Text style={{fontWeight:'bold'}}>{props.tagName}</Text> articles.</Text>
        <View style={{alignItems:'center'}}>
        <Switch 
            value={isEnabled}
            onValueChange={toggleSwitch}
        />
        </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        margin: 8,
        width:'90%'
    },
    title: {
        fontSize: 16, 
        marginBottom: 10, 
        textAlign: 'center'
    }
})