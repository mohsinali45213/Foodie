import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import ButtonDark from '../Components/Button/ButtonDark';

const PaymentMethod = ({navigation}) => {
  const [checked, setChecked] = useState(1);
  return (
    <View>
      <Header title={'Payment Method'} onPress={() => navigation.goBack()} />
      <View>
        <TouchableOpacity activeOpacity={1} onPress={() => setChecked(1)}>
          <View style={styles.container}>
            <Text style={styles.title}>Credit ,debit card</Text>
            <View style={styles.radioContainer}>
              {checked === 1 ? <View style={styles.radio}></View> : ''}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => setChecked(2)}>
          <View style={styles.container}>
            <Text style={styles.title}>PayPal</Text>
            <View style={styles.radioContainer}>
              {checked === 2 ? <View style={styles.radio}></View> : ''}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => setChecked(3)}>
          <View style={styles.container}>
            <Text style={styles.title}>Cash On Delivery</Text>
            <View style={styles.radioContainer}>
              {checked === 3 ? <View style={styles.radio}></View> : ''}
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
      <ButtonDark title={"Next"}/>
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#282828',
  },
  radioContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#555',
  },
  radio: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#E60023',
  },
  button: {
    paddingHorizontal:20,
    marginTop:100
  }
});
