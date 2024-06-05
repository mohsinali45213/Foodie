import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icons from '../Components/Icons';
import Header from '../Components/Header';
import {transformer} from '../../metro.config';

const ForgotPass = ({navigation}) => {
  return (
    <View>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icons
            type={'MaterialIcons'}
            name={'password'}
            size={60}
            color={'#E60023'}
          />
        </View>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.desc}>Enter your register email or phone no.</Text>
        <TextInput placeholder="Email or Phone" style={styles.input} />
        <Pressable style={styles.button} onPress={()=>navigation.navigate("Verification")}>
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

export default ForgotPass;

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
    backgroundColor: '#E0E0E1',
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginVertical: 60,
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
  icon: {},
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
