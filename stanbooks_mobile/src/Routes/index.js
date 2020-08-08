import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ScanScreen from '~/pages/QRCode';
import Navigation from './Navigation';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.signed ? Navigation : SignIn}
        screenOptions={{
          headerShown: false,
        }}
      >

        {props.signed ? (
          <>
            <Stack.Screen name='Navigation' component={Navigation} />
          </>
        ) : (
          <>
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
          </>
        ) }

        {/* <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Navigation' component={Navigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
