/// Simo Partanen 1900414 
/// This component provides the navigation when user isnt authenticated so navigating between the login and registration screens.
/// Navigation is handled by stack navigator and simple buttons and back arrow in the registration screen.
/// Also need to import the correct screens login & registration screen.

import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SignupScreen from '../screens/SignUpScreen/SignupScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: 'SignUp',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',   
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button 
                name="long-arrow-left"
                size={25}
                backgroundColor="black"
                color="white"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;