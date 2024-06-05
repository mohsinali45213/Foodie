import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ButtonDark from '../Components/Button/ButtonDark';
import Header from '../Components/Header';
import {TextInput} from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <View>
      <Header title={"Sign up"} onPress={()=>navigation.goBack()}/>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.heading}>Create your new account.</Text>
        <TextInput style={styles.inputBox} placeholder="Full Name" />
        <TextInput style={styles.inputBox} placeholder="Email" />
        <TextInput style={styles.inputBox} placeholder="Password" />
        <TextInput style={styles.inputBox} placeholder="Confirm Password" />
        <ButtonDark title={'Sign up'} onPress={()=>navigation.navigate("Login")} />
        <TouchableOpacity style={styles.register} onPress={()=>navigation.navigate("Login")}>
          <Text>Already an account, </Text>
          <Text style={styles.signup}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#E60023',
    textAlign: 'center',
    paddingTop: 50,
  },
  heading: {
    textAlign: 'center',
    fontSize: 15,
    paddingBottom: 30,
  },
  inputBox: {
    backgroundColor: '#E0E0E1',
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginVertical: 10,
  },
  register: {
    marginTop: 10,
    flexDirection:"row",
    width:"100%",
    justifyContent:"center"
  },
  signup: {
    color: '#E60023',
    fontSize: 15,
    fontWeight: '900',
  },
});
