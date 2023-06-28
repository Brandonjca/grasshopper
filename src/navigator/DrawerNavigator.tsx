/* eslint-disable prettier/prettier */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { settings } from '../screens/settings';
import { useWindowDimensions } from 'react-native';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
    }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
      <Drawer.Screen name="settings" options={{ title: 'Configuración' }} component={settings} />
    </Drawer.Navigator>
  );
};
