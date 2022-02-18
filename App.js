import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from './src/components/Button';

import {screenHeight, screenWidth} from './src/constants/dimensions';


export default function App() {
  return (
    <View style={styles.container}>
      <Button text='ENTRAR' width={screenWidth*0.35} height={50} backgroundcolor={'#837F7B'} radius={5}/>
      <Button text='Registrar-se' width={screenWidth*0.67} height={50} backgroundcolor={'#AB0707'}  radius={30}/>
      <StatusBar style="auto" backgroundColor='#fff' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
