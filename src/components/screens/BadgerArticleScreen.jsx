import { Text, View, ScrollView, Image, Dimensions, Animated, Linking, Pressable } from "react-native";
import { useState, useEffect, useRef } from "react";

function BadgerArticleScreen(props) {

    const [article, setArticle] = useState({});
    const fadeAnim = useRef(new Animated.Value(0));

    useEffect(() => {
        fetch(`https://cs571.org/api/s24/hw8/article?id=${props.route.params.fullArticleId}`, {
        headers: {
            "X-CS571-ID": "bid_a6c06f452051e5d64e278142151b3279c2bfa0fb2f7fc1ace03af60504d5df60"
        }
        })
        .then(res => res.json())
        .then(data => {
            setArticle(data)
        })
    }, [])

    useEffect(() => {
        if (Object.keys(article).length !== 0) {
            Animated.timing(fadeAnim.current, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }).start();
        }  
      }, [article])

    return <View style={{ flex: 1 }}>
        <ScrollView >
        <Image style={{
                width: Dimensions.get('window').width,
                height: 250
            }}
            source={{uri: `https://raw.githubusercontent.com/CS571-S24/hw8-api-static-content/main/${props.route.params.img}`}}></Image>
        <Text style={{marginTop:12,marginBottom:12,marginRight:8,marginLeft:8,fontSize:24}}>{props.route.params.title}</Text>
        {Object.keys(article).length === 0 ? <Text>The content is loading!</Text>
        :
            <View style={{marginTop:12,marginBottom:12,marginRight:8,marginLeft:8}}>
                <Animated.Text style={{
                    opacity: fadeAnim.current
                }}>
                    <View>
                    <Text style={{fontSize:16}}>By {article.author} on {article.posted}</Text>
                    <Pressable style={{marginBottom:24}} onPress={() => Linking.openURL(article.url)}>
                        <Text style={{color:'#00BFFF', fontSize:16}}>Read full article here.</Text>
                    </Pressable>
                    </View>
                    {article.body.map(paragraph => 
                    <View key={paragraph} style={{marginBottom:4}}>
                    <Text>{paragraph}</Text>
                    </View>)}
                    
                </Animated.Text>
            
            </View>
            
        }
        </ScrollView>
    </View>
}

export default BadgerArticleScreen;