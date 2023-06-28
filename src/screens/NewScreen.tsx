/* eslint-disable prettier/prettier */
// import { StackScreenProps } from '@react-navigation/stack';
import React
// { useEffect }
from 'react';
import { Text} from 'react-native';
// import { RootStackParams } from '../navigator/StackNavigator';
// import { styles } from '../themes/appTheme';

// interface Props extends StackScreenProps<RootStackParams, 'NewScreen'>{}

// export const NewScreen = ( { route, navigation }:Props ) => {

//   const params = route.params;

//   useEffect(() => {
//     navigation.setOptions({
//       title: params.name,
//     });
//   },[]);

//   return (
//     <View style={ styles.globalMargin }>
//       <Text style={styles.title} > {JSON.stringify(params,null,3)} </Text>

//     </View>
//   );
// };

export const NewScreen = () => {
  return (
    <Text>NewScreen</Text>
  );
};
