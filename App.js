import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro'
import EsqueciSenha from './screens/EsqueciSenha';
import DashboardStack from './routes';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
  <NavigationContainer>
    <DashboardStack/>
    <StatusBar style="auto" backgroundColor='#fff' />
  </NavigationContainer>

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
