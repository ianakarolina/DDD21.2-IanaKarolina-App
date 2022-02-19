import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro'


export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro />
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
