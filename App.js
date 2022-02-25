import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forget from './Pages/Forget';
import Home from './Pages/Home';
import Pediatrician from './Pages/Pediatrician';
import Docterprofile from './Pages/Docterprofile';
import Editprofile from './Partner/Editprofile'
// import './assets/style.css';
const Stack = createNativeStackNavigator();

export default () =>(
         <NavigationContainer>
         <Stack.Navigator initialRouteName="Login">
           <Stack.Screen  name="Login" component={Login} />
           <Stack.Screen name="Register" component={Register} />
           <Stack.Screen name="Forget" component={Forget} />
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Pediatrician" component={Pediatrician} />
           <Stack.Screen name="Docterprofile" component={Docterprofile} />
           <Stack.Screen name="Editprofile" component={Editprofile} />
         </Stack.Navigator>
       </NavigationContainer>
);

