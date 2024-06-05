import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import ButtonDark from '../Components/Button/ButtonDark';

const AddNewAddress = ({navigation}) => {
  return (
    <View>
      <Header title={'Add New Address'} />
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Phone Number" />
        <TextInput style={styles.input} placeholder="Address Type" />
        <TextInput style={styles.input} placeholder="Address Title" />
        <TextInput style={styles.input} placeholder="City" />
        <TextInput style={styles.input} placeholder="Address" />
      </View>
      <View style={styles.button}>
        <ButtonDark title={'Save'} style={styles.button} onPress={()=>navigation.goBack()}/>
      </View>
    </View>
  );
};

export default AddNewAddress;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 40,
    gap: 15,
  },
  input: {
    backgroundColor: '#E0E0E1',
    borderRadius: 10,
    padding: 15,
  },
  button: {
    marginTop: 60,
    marginHorizontal: 20,
  },
});
