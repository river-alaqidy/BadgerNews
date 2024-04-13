import { Text, View, ScrollView } from "react-native";
import { useContext, useEffect, useState } from 'react';
import BadgerNewsItemCard from "../BadgerNewsItemCard";
import PreferencesContext from "../PreferencesContext";

function BadgerNewsScreen(props) {

    const [articles, setArticles] = useState([]);
    const [tags, setTags] = useContext(PreferencesContext);
    const [filteredArticles, setFilteredArticles] = useState([]);

    useEffect(() => {
        setFilteredArticles(articles.filter(article => article.tags.some(tag => tags[tag] === true)))
    }, [tags])
    
    useEffect(() => {
        fetch("https://cs571.org/api/s24/hw8/articles", {
        headers: {
            "X-CS571-ID": "bid_a6c06f452051e5d64e278142151b3279c2bfa0fb2f7fc1ace03af60504d5df60"
        }
        })
        .then(res => res.json())
        .then(data => {
            setArticles(data)
            setFilteredArticles(data)
        })
    }, [])

    return <View style={{ flex: 1 }}>
        <ScrollView style={{ width: "100%", flexGrow: 8 }} contentContainerStyle={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
            {filteredArticles.length === 0 ? 
            <Text style={{textAlign:'center', fontSize:32, margin:20, marginTop:100}}>There are no articles that fit your preferences!</Text>
            :
            filteredArticles.map(article => <BadgerNewsItemCard key={article.id} {...article}/>)
            }
        </ScrollView>
    </View>
}

export default BadgerNewsScreen;