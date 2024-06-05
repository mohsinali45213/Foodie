import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icons from '../Components/Icons';
import Header from '../Components/Header';
import {transformer} from '../../metro.config';
import { OtpInput } from 'react-native-otp-entry';

const Verification = ({navigation}) => {
  return (
    <View>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icons
            type={'Octicons'}
            name={'verified'}
            size={60}
            color={'#E60023'}
          />
        </View>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.desc}>Enter your verification code</Text>
        <View style={styles.input} >
        <OtpInput
  numberOfDigits={4}
  focusColor="#e60023"
  focusStickBlinkingDuration={500}
  theme={{
    containerStyle: styles.container,
    pinCodeContainerStyle:{
      width:60,
      height:60
    },
    pinCodeTextStyle:{
      fontSize:25,
    },
  }}
/>
        </View>
        <Pressable style={styles.button} onPress={()=>navigation.navigate("NewPass")}>
          <Icons
            type={'FontAwesome6'}
            name={'arrow-right-long'}
            size={25}
            color={'white'}
            style={{transform: 'rotate(-45deg)'}}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 40,
    gap: 5,
  },
  title: {
    fontSize: 25,
    color: '#E60023',
    textAlign: 'center',
    paddingTop: 40,
  },
  desc: {
    textAlign: 'center',
    paddingHorizontal: 10,
    fontSize: 15,
  },
  input: {
    marginVertical: 50,
    paddingHorizontal:20
  },
  iconContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD',
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#E60023',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    transform: 'rotate(45deg)',
    alignSelf: 'center',
  },
});
