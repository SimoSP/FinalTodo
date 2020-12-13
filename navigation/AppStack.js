/// Simo Partanen 1900414
/// This Appstack provides navigation inside app when the user is authenticated.
/// Inside the app navigation is done with Bottom tab navigator which also has the logout function with confirmation.
/// Also need to import the correct screens for this component 

import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert } from "react-native";

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AddScreen from '../screens/AddScreen/AddScreen';
import ListScreen from '../screens/ListScreen/ListScreen';

import { AuthContext } from './AuthProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: 'chartreuse',
      activeBackgroundColor: 'green',
           style: {
                 backgroundColor: 'darkgreen',

           }
    }}>
    <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
      <AntDesign name="home" color={color} size={size} />),
      }}/>
    <Tab.Screen name="Add" component={AddScreen}
    options={{
      tabBarLabel: 'Add',
      tabBarIcon: ({ color, size }) => (
      <AntDesign name="plus" color={color} size={size} />),
      }} 
    />
    <Tab.Screen name="List" component={ListScreen} 
    options={{
      tabBarLabel: 'List',
      tabBarIcon: ({ color, size }) => (
      <AntDesign name="book" color={color} size={size} />),
      }}/>
    <Tab.Screen name="Logout" component={HomeScreen}
    options={{
      tabBarLabel: 'Logout',
      tabBarIcon: ({ color, size }) => (
      <AntDesign name="logout" color={color} size={size} />),
      }}
     listeners={{
    tabPress: e =>  {
      Alert.alert(
        "Logout",
        "Do you want to logout?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "Logout!", onPress: () => logout() }
        ],
        { cancelable: false }
      );
      
    },
  }}/>
  </Tab.Navigator> 
  );
}
 
export default AppStack;