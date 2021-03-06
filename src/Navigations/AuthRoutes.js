import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../../components/Login';
import SingUp from '../../components/SignUp';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn" >
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SingUp} />
        <Stack.Screen name='Home' component={BottomTab} />
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
  
  export default AuthRoutes;