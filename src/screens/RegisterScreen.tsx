/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, TextInput, Text, Alert } from 'react-native'
import { styles } from '../themes/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import DateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/Ionicons'
import { Image } from 'react-native'
import { api } from '../api/api'

// import { DatePickerAndroid } from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [birthdate, setBirthdate] = useState('')
  // const [showDatePicker, setShowDatePicker] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('')

  interface credentials {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
  }

  const register = async ({
    firstName,
    lastName,
    username,
    email,
    password,
  }: credentials) => {
    try {
      const RES = await api.post('auth/sign-up', {
        firstName,
        lastName,
        username,
        email,
        password,
      })
      console.log(RES)
      return true
    } catch (error) {
      return false
    }
  }

  const handleRegister = async() => {
    // Aquí puedes realizar la lógica de registro con la información ingresada
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Password:', password);
    // console.log('Confirmar contraseña:', passwordConfirm);
    // console.log('Age:', age);
    // console.log('Birthdate:', birthdate);
    // navigation.navigate('LoginScreen');
    if (
      firstName === '' ||
      lastName === '' ||
      password === '' ||
      username === '' ||
      email === ''
    ) {
      return Alert.alert(
        'Register error',
        'Por favor complete todos los campos',
      )
    }
    if (password === passwordConfirm) {
      console.log('las contraseñas coinciden: ', password)
      navigation.navigate('LoginScreen')
    } else {
      Alert.alert('Error', 'Las contraseñas no coinciden', [
        { text: 'Aceptar' },
      ])
    } if (await register({ firstName, lastName, username, email, password })){
      navigation.navigate('RegisterScreen')
    }
  }

  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleDateSelection = (event: Event, date?: Date) => {
    setShowDatePicker(false)
    if (date) {
      setBirthdate(date.toDateString())
    }
  }

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  return (
    <ScrollView>
      <Image
        style={{
          alignSelf: 'center',
          width: 300,
          height: 200,
          resizeMode: 'contain',
        }}
        source={require('../assets/logograsshopper.webp')}
      />
      <View style={{ padding: 20, alignContent: 'center' }}>
        <Text>Nombre:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ position: 'relative', flex: 1 }}>
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
              placeholder="Nombre"
              onChangeText={(text) => setfirstName(text)}
              value={firstName}
            />
            <Icon
              name="person-outline"
              size={20}
              style={{
                position: 'absolute',
                top: 15,
                left: 10,
                color: 'green',
              }}
            />
          </View>
        </View>
        <Text>Apellido:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ position: 'relative', flex: 1 }}>
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
              placeholder="Apellido"
              onChangeText={(text) => setlastName(text)}
              value={lastName}
            />
            <Icon
              name="person-outline"
              size={20}
              style={{
                position: 'absolute',
                top: 15,
                left: 10,
                color: 'green',
              }}
            />
          </View>
        </View>
        <Text>Nombre de usuario:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ position: 'relative', flex: 1 }}>
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
              placeholder="Nombre de usuario"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
            <Icon
              name="person-outline"
              size={20}
              style={{
                position: 'absolute',
                top: 15,
                left: 10,
                color: 'green',
              }}
            />
          </View>
        </View>
        <Text>Email:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ position: 'relative', flex: 1 }}>
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
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Icon
              name="mail-outline"
              size={20}
              style={{
                position: 'absolute',
                top: 15,
                left: 10,
                color: 'green',
              }}
            />
          </View>
        </View>
        <Text>Contraseña:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ position: 'relative', flex: 1 }}>
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
              placeholder="Contraseña"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <Icon
              name="lock-closed-outline"
              size={20}
              style={{
                position: 'absolute',
                top: 15,
                left: 10,
                color: 'green',
              }}
            />
          </View>
        </View>
        <Text>Verifica la contraseña:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ position: 'relative', flex: 1 }}>
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
              placeholder="Confirmar contraseña"
              secureTextEntry
              onChangeText={(text) => setPasswordConfirm(text)}
              value={passwordConfirm}
            />
            <Icon
              name="lock-closed-outline"
              size={20}
              style={{
                position: 'absolute',
                top: 15,
                left: 10,
                color: 'green',
              }}
            />
          </View>
        </View>
        <Text>Edad:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ position: 'relative', flex: 1 }}>
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
              placeholder="Edad"
              keyboardType="numeric"
              onChangeText={(text) => setAge(text)}
              value={age}
            />
            <Icon
              name="happy-outline"
              size={20}
              style={{
                position: 'absolute',
                top: 15,
                left: 10,
                color: 'green',
              }}
            />
          </View>
        </View>
        <Text>Fecha de nacimiento:</Text>
        <TouchableOpacity
          style={{
            ...styles.botonesText,
            marginBottom: 20,
            borderColor: 'green',
            borderWidth: 1,
            borderRadius: 20,
            padding: 10,
            backgroundColor: 'transparent',
          }}
          onPress={openDatePicker}
        >
          <Text style={{ textAlign: 'center' }}>
            {birthdate ? birthdate : 'Seleccionar fecha de nacimiento'}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={handleDateSelection}
          />
        )}
        {/* <TextInput
        style={{
          ...styles.botonesText,
          marginBottom: 20,
          color: 'black',
          textAlign: 'center',
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 20,
        }}
        placeholder="Birthdate"
        onChangeText={text => setBirthdate(text)}
        value={birthdate}
      /> */}
        <View style={{ alignItems: 'center' }}>
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
              alignContent: 'center',
            }}
            onPress={handleRegister}
          >
            <Text style={{ color: 'white' }}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
