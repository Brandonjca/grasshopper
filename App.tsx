import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {StackNavigator} from './src/navigator/StackNavigator';
// import {DrawerPro} from './src/navigator/DrawerPro';s

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <StackNavigator />
      {/* <DrawerPro /> */}
    </NavigationContainer>
  );
};

export default App;
