import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from '~/pages/Home';
import QRCode from '~/pages/QRCode';
import Perfil from '~/pages/Perfil';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  QRCode: {
    lib: MaterialCommunityIcons,
    name: 'qrcode-scan',
  },
  Perfil: {
    lib: FontAwesome,
    name: 'user'
  }
};

const Navigation = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#FFF",
          borderTopColor: 'rgba(255, 255, 255, 0.1)',
        },
        activeTintColor: '#FF6600',
        inactiveTintColor:'#999'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => {
            const { lib: Icon, name} = icons.Home;
            return <Icon  name={name} size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="QRCode"
        component={QRCode}
        options={{
          tabBarLabel: 'Scanear',
          tabBarIcon: ({color, size}) => {
            const { lib: Icon, name} = icons.QRCode;
            return <Icon  name={name} size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color, size}) => {
            const { lib: Icon, name} = icons.Perfil;
            return <Icon  name={name} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
