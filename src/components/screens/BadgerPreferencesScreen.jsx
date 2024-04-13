import { useContext, useEffect } from "react";
import { View } from "react-native";
import PreferencesContext from "../PreferencesContext";
import BadgerSwitchCard from "../BadgerSwitchCard";

function BadgerPreferencesScreen(props) {

    const [tags, setTags] = useContext(PreferencesContext)

    const changePreferences = (tagName, isEnabled) => {
        const updatedTags = {
            ...tags,
            [tagName]: isEnabled
        };
        setTags(updatedTags);
    }

    useEffect(() => {
        fetch("https://cs571.org/api/s24/hw8/articles", {
        headers: {
            "X-CS571-ID": "bid_a6c06f452051e5d64e278142151b3279c2bfa0fb2f7fc1ace03af60504d5df60"
        }
        })
        .then(res => res.json())
        .then(data => {
            setTags(
                data.reduce((acc, article) => {
                    article.tags.forEach(tag => {
                        if (!acc[tag]) {
                            acc[tag] = true;
                        }
                    });
                    return acc;
                }, {}));
        })
    }, [])

    return <View style={{ alignItems: "center" }}>
        {Object.keys(tags).map(tag => <BadgerSwitchCard key={tag} tagName={tag} changePref={changePreferences}/>)}     
    </View>
}

export default BadgerPreferencesScreen;