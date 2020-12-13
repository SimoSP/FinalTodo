/// Simo Partanen 1900414
/// Importing components FormInput and FormButton from their folders and styles from ./styles
/// Also prodiving authcontext from authprovider

import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import styles from './styles';
import { AuthContext } from '../../navigation/AuthProvider';
 
const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default LoginScreen;
