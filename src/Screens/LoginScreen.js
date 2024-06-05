import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ButtonDark from '../Components/Button/ButtonDark';
import Header from '../Components/Header';
import {TextInput} from 'react-native';

const LoginScreen = ({navigation},props) => {
  return (
    <View>
      <Header title={"Sign in"} onPress={()=>navigation.goBack()} />
      <View style={styles.container}> 
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.heading}>Login to your account</Text>
        <TextInput style={styles.inputBox} placeholder="Email" />
        <TextInput style={styles.inputBox} placeholder="Password" />
        <TouchableOpacity onPress={()=>navigation.navigate("Forgot")}>
        <Text style={styles.forgot}>Forgot Password ?</Text>
        </TouchableOpacity>
        <ButtonDark title={'Login'} onPress={()=>navigation.navigate("Tab")}/>
        <TouchableOpacity style={styles.register} onPress={()=>navigation.navigate("Register")}>
          <Text>Don't have an account? </Text>
          <Text style={styles.signup}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#E60023',
    textAlign: 'center',
    paddingTop: 70,
  },
  heading: {
    textAlign: 'center',
    fontSize: 15,
    paddingBottom: 50,
  },
  inputBox: {
    backgroundColor: '#E0E0E1',
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginVertical: 10,
  },
  forgot: {
    color: '#E60023',
    marginBottom: 30,
    paddingLeft: 5,
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
