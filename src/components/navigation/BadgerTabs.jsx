import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BadgerPreferencesScreen from "../screens/BadgerPreferencesScreen";
import BadgerNewsStack from "../BadgerNewsStack"
import { Ionicons } from '@expo/vector-icons';

function BadgerTabs(props) {
    
    const BottomTabNavigator = createBottomTabNavigator();
    return <>
        <BottomTabNavigator.Navigator screenOptions={{
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "grey",
            }}>
            <BottomTabNavigator.Screen name="News" component={BadgerNewsStack} options={{
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <Ionicons name="newspaper-outline" size={24} color={focused ? "red" : "grey"} />
                ),
                
                }}/>
            <BottomTabNavigator.Screen name="Preferences" component={BadgerPreferencesScreen} options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons name="settings-outline" size={24} color={focused ? "red" : "grey"}/>
                ),
                }}/>
        </BottomTabNavigator.Navigator>
    </>
}

export default BadgerTabs;