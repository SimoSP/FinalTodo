/// Simo Partanen 1900414

import React, { useContext } from 'react';
import { View, Text,Image } from 'react-native';

import styles from './styles';
import { AuthContext } from '../../navigation/AuthProvider';
 
const HomeScreen = () => {

  const {user, logout} = useContext(AuthContext);

  return (
    
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <Text></Text>
      <Text style={styles.text}>Welcome {user.email}</Text>
    </View>
  );
}
 
export default HomeScreen;
 
