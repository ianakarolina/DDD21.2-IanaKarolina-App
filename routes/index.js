import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import EsqueciSenha from '../screens/EsqueciSenha';

const Stack = createStackNavigator();

const DashboardStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
        </Stack.Navigator>
    );
};

export default DashboardStack