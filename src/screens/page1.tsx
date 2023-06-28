/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

// import {StackScreenProps} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Image, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Page1 = ({navigation}: Props) => {

  useEffect(() =>{
    navigation.setOptions({
      headerLeft: () => (
        <Button
        title="menu"
        onPress={() => navigation.toggleDrawer()}/>
      ),
    });
  }, []);


  return (
    <ScrollView>
      <View style={styles.globalMargin}>
        <Text>Pagina 1</Text>
        <Button
          title="Ir a pagina 2"
          onPress={() => navigation.navigate('Page2')}
        />
        <Text style={styles.title}>GRASSHOPPER</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              ...styles.botones,
              backgroundColor: 'black',
            }}
            onPress={() =>
              navigation.navigate('PerfilScreen', {
                id: 1,
                nombre: 'Brandon',
              })
            }
          >
            <Text style={styles.botonesText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botones}
            onPress={() =>
              navigation.navigate('NewScreen', {
                id: 1,
                nombre: 'New',
              })
            }
          >
            <Text style={styles.botonesText}>Nuevo +</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cuadroPubli}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.profilePicture}
              source={require('../assets/descarga.jpeg')}
            />
            <Text style={styles.userText}>Usser Name</Text>
          </View>
          <Text style={styles.textPublication}>Hola a todos soy new usser</Text>
          <View style={{flexDirection: 'row', marginLeft: 50, marginTop: 15}}>
            <Icon
              style={{}}
              name="chatbubble-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="git-compare-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="heart-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="bookmark-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="trash-outline"
              size={30}
              color="black"
            />
          </View>
        </View>
        <View style={styles.cuadroPubli}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.profilePicture}
              source={require('../assets/descarga.jpeg')}
            />
            <Text style={styles.userText}>Usser Name</Text>
          </View>
          <Text style={styles.textPublication}>Hola a todos soy new usser</Text>
          <View style={{flexDirection: 'row', marginLeft: 50, marginTop: 15}}>
            <Icon
              style={{}}
              name="chatbubble-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="git-compare-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="heart-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="bookmark-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="trash-outline"
              size={30}
              color="black"
            />
          </View>
        </View>
        <View style={styles.cuadroPubli}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.profilePicture}
              source={require('../assets/descarga.jpeg')}
            />
            <Text style={styles.userText}>Usser Name</Text>
          </View>
          <Text style={styles.textPublication}>Hola a todos soy new usser</Text>
          <View style={{flexDirection: 'row', marginLeft: 50, marginTop: 15}}>
            <Icon
              style={{}}
              name="chatbubble-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="git-compare-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="heart-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="bookmark-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="trash-outline"
              size={30}
              color="black"
            />
          </View>
        </View>
        <View style={styles.cuadroPubli}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.profilePicture}
              source={require('../assets/descarga.jpeg')}
            />
            <Text style={styles.userText}>Usser Name</Text>
          </View>
          <Text style={styles.textPublication}>Hola a todos soy new usser</Text>
          <View style={{flexDirection: 'row', marginLeft: 50, marginTop: 15}}>
            <Icon
              style={{}}
              name="chatbubble-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="git-compare-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="heart-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="bookmark-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="trash-outline"
              size={30}
              color="black"
            />
          </View>
        </View>
        <View style={styles.cuadroPubli}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.profilePicture}
              source={require('../assets/descarga.jpeg')}
            />
            <Text style={styles.userText}>Usser Name</Text>
          </View>
          <Text style={styles.textPublication}>Hola a todos soy new usser</Text>
          <View style={{flexDirection: 'row', marginLeft: 50, marginTop: 15}}>
            <Icon
              style={{}}
              name="chatbubble-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="git-compare-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="heart-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="bookmark-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="trash-outline"
              size={30}
              color="black"
            />
          </View>
        </View>
        <View style={styles.cuadroPubli}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.profilePicture}
              source={require('../assets/descarga.jpeg')}
            />
            <Text style={styles.userText}>Usser Name</Text>
          </View>
          <Text style={styles.textPublication}>Hola a todos soy new usser</Text>
          <View style={{flexDirection: 'row', marginLeft: 50, marginTop: 15}}>
            <Icon
              style={{}}
              name="chatbubble-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="git-compare-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="heart-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="bookmark-outline"
              size={30}
              color="black"
            />
            <Icon
              style={{marginLeft: 20}}
              name="trash-outline"
              size={30}
              color="black"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
