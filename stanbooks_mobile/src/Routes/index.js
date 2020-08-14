import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Navigation from './Navigation';
import Loan from '~/pages/Loan';
import UpdateProfile from '~/pages/UpdateProfile';
import Delayed from '~/pages/Delayed';
import Booking from '~/pages/Booking';

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
            <Stack.Screen name='Loan' component={Loan} />
            <Stack.Screen
              name='UpdateProfile' component={UpdateProfile}
            />
            <Stack.Screen
              name='Delayed' component={Delayed}
            />
            <Stack.Screen
              name='Booking' component={Booking}
            />
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
