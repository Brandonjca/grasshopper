/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../themes/appTheme';
// import { SafeAreaView } from 'react-native-safe-area-context';



export const Page3 = () => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin,
     marginTop: insets.top + 20}}>

    <Text style={styles.title}>Guardados</Text>

    </View>
  )
};
