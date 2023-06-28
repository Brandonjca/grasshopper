/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}

export const Page2 = ( { navigation }:Props ) => {

  return (
    <View style={styles.globalMargin} >
      <Text>Pagina 2</Text>
      <Button
      title="Ir a pagina 3"
      onPress={ () => navigation.navigate('Page3') }
      />
    </View>
  );
};
