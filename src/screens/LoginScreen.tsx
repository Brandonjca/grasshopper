import React, {useState} from 'react';
import {View, TextInput, Alert} from 'react-native';
import {styles} from '../themes/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import { api } from '../api/api';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  interface credentials {username: String, password: String}

  const login = async ( { username, password }:credentials ) => {
try {
  const RES = await api.post("/auth/sign-in",{username, password})
  console.log(username, password);
  console.log(RES);
  return true;
} catch (error:any) {
  Alert.alert('Login error', "usuario o contraseña incorrectos.")
  return false;
}
  }
  
  const handleLogin = async() => {
    if (username === '' || password === '') {
     return Alert.alert('Login error' ,'Por favor complete todos los campos');
    }
    if (await login({ username, password })){
      navigation.navigate('DrawerPro')
    }

  };

  return (
    <View style={{padding: 20, alignContent: 'center'}}>
      <Image
        style={{
          alignSelf: 'center',
          width: 300,
          height: 200,
          resizeMode: 'contain',
        }}
        source={require('../assets/logograsshopper.webp')}
      />
      <Text>Usuario:</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{position: 'relative', flex: 1}}>
          <TextInput
            style={{
              ...styles.botonesText,
              marginBottom: 20,
              color: 'black',
              textAlign: 'center',
              borderColor: 'green',
              borderWidth: 1,
              borderRadius: 20,
            }}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
          />
          <Icon
            name="checkmark-outline"
            size={20}
            style={{position: 'absolute', top: 15, left: 10}}
          />
        </View>
      </View>
      <Text>Contraseña:</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{position: 'relative', flex: 1}}>
          <TextInput
            style={{
              ...styles.botonesText,
              color: 'black',
              textAlign: 'center',
              borderColor: 'green',
              borderWidth: 1,
              borderRadius: 20,
            }}
            placeholder="Password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <Icon
            name="checkmark-done-outline"
            size={20}
            style={{position: 'absolute', top: 15, left: 10}}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            margin: 20,
            borderRadius: 20,
            borderColor: 'black',
            borderWidth: 1,
            backgroundColor: 'green',
            width: 100,
            alignItems: 'center',
            padding: 10,
          }}
          onPress={handleLogin}
        >
          <Text style={{color: 'white'}}>Ingresar</Text>
        </TouchableOpacity>
        <Text>¿No tienes una cuenta? crea una aquí.</Text>
        <TouchableOpacity
          style={{
            margin: 20,
            borderRadius: 20,
            borderColor: 'black',
            borderWidth: 1,
            backgroundColor: 'green',
            width: 100,
            alignItems: 'center',
            padding: 10,
          }}
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text style={{color: 'white'}}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
