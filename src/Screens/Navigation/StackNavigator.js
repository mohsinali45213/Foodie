import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import WelCome from '../WelCome';
import Home from '../Home';
import TabNavigation from './TabNavigation';
import Splash from '../Splash';
import ForgotPass from '../ForgotPass';
import Verification from '../Verification';
import NewPass from '../NewPass';
import Payment from '../Payment';
import PaymentMethod from '../PaymentMethod';
import Address from '../Address';
import AddNewAddress from '../AddNewAddress';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown:false,
      }}
      >

        <Stack.Screen
          name="Welcome" 
          component={WelCome} 
        />

        <Stack.Screen
          name="Login" 
          component={LoginScreen} 
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Tab"
          component={TabNavigation}
        />

        <Stack.Screen
          name="Splash"
          component={Splash}
        />
        
        <Stack.Screen
          name="Forgot"
          component={ForgotPass}
        />

        <Stack.Screen
          name="Verification"
          component={Verification}
        />

        <Stack.Screen
          name="NewPass"
          component={NewPass}
        />
        
        <Stack.Screen
          name="Payment"
          component={Payment}
        />
        
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
        />
        
        <Stack.Screen
          name="Address"
          component={Address}
        />
        
        <Stack.Screen
          name="NewAdd"
          component={AddNewAddress}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
