import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forget from './Pages/Forget';
import Home from './Pages/Home';
import Pediatrician from './Pages/Pediatrician';
import Docterprofile from './Pages/Docterprofile';
import Editprofile from './Partner/Editprofile';
import Complete from './Partner/Complete';
import Partnerlogin from './Partner/Partnerlogin';
import Partnerregister from './Partner/Partnerregister';
import Pending from './Partner/Pending';

const Stack = createNativeStackNavigator();

export default () =>(
         <NavigationContainer>
         <Stack.Navigator initialRouteName="Login">
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Register" component={Register} />
           <Stack.Screen name="Forget" component={Forget} />
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Pediatrician" component={Pediatrician} />
           <Stack.Screen name="Docterprofile" component={Docterprofile} />

           <Stack.Screen name="Editprofile" component={Editprofile} />
           <Stack.Screen name="Complete" component={Complete} />
           <Stack.Screen name="Partnerlogin" component={Partnerlogin} />
           <Stack.Screen name="Partnerregister" component={Partnerregister} />
           <Stack.Screen name="Pending" component={Pending} />
         </Stack.Navigator>
       </NavigationContainer>
);

