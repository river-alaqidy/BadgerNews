import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BadgerNewsScreen from "./screens/BadgerNewsScreen";
import BadgerArticleScreen from "./screens/BadgerArticleScreen";

function NewsFeedStack() {

  const NewsStack = createNativeStackNavigator();

  return (
      <NewsStack.Navigator>
        <NewsStack.Screen name="Articles" component={BadgerNewsScreen} />
        <NewsStack.Screen name="Article" component={BadgerArticleScreen} />
      </NewsStack.Navigator>
  );
}

export default NewsFeedStack;