/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {Text, View, useWindowDimensions} from 'react-native';
import {StackNavigator} from './StackNavigator';
import {Image} from 'react-native';
import {styles} from '../themes/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Page1} from '../screens/page1';
import {PerfilScreen} from '../screens/PerfilScreen';
import {Page3} from '../screens/page3';
import Icon from 'react-native-vector-icons/Ionicons';
import {Page2} from '../screens/page2';
import {NewScreen} from '../screens/NewScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {SettingsScreen} from '../screens/SettingsScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export const DrawerPro = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Page1" component={Page1} />
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Page3" component={Page3} />
      <Drawer.Screen name="Page2" component={Page2} />
      <Drawer.Screen name="PerfilScreen" component={PerfilScreen} />
      <Drawer.Screen name="NewScreen" component={NewScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png',
          }}
          style={styles.avatarMax}
        />
      </View>

      {/* Opciones del Munu lateral */}
      <View style={styles.menuContainer}>
        <View style={{flexDirection: 'row'}}>
          <Icon style={{}} name="home-outline" size={30} color="black" />
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={() => navigation.navigate('Page1')}
          >
            <Text style={styles.textMenu}>Inicio</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon style={{}} name="bookmark-outline" size={30} color="black" />
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={() => navigation.navigate('Page2')}
          >
            <Text style={styles.textMenu}>Guardados</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon style={{}} name="person-outline" size={30} color="black" />
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={() => navigation.navigate('PerfilScreen')}
          >
            <Text style={styles.textMenu}>Perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            style={{}}
            name="ellipsis-horizontal-circle-outline"
            size={30}
            color="black"
          />
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={() => navigation.navigate('Page3')}
          >
            <Text style={styles.textMenu}>Mas</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon style={{}} name="settings-outline" size={30} color="black" />
          <TouchableOpacity style={styles.menuBoton}>
            <Text
              style={styles.textMenu}
              onPress={() => navigation.navigate('SettingsScreen')}
            >
              Configuración
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Icon style={{}} name="log-out-outline" size={30} color="black" />
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={styles.textMenu}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
