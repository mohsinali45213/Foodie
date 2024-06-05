import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {Image} from 'react-native-animatable';

const Shop = ({navigation}) => {
  return (
    <ScrollView decelerationRate={'fast'}>
      <Header title={'Cart'} onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.cart}>
          <Image source={require('../assets/5.png')} style={styles.cartImage} />
          <View style={styles.details}>
            <View style={styles.quantityContainer}>
              <Text style={styles.title}>Egg Past</Text>
              <Text style={styles.quantity}>2x</Text>
            </View>
            <Text style={styles.description}>Spicey chicken pasta</Text>
            <Text style={styles.price}>$15.00</Text>
          </View>
        </View>
        <View style={styles.cart}>
          <Image source={require('../assets/1.png')} style={styles.cartImage} />
          <View style={styles.details}>
            <View style={styles.quantityContainer}>
              <Text style={styles.title}>Burger</Text>
              <Text style={styles.quantity}>2x</Text>
            </View>
            <Text style={styles.description}>Spicey chicken burger</Text>
            <Text style={styles.price}>$10.00</Text>
          </View>
        </View>
        <View style={styles.cart}>
          <Image source={require('../assets/2.png')} style={styles.cartImage} />
          <View style={styles.details}>
            <View style={styles.quantityContainer}>
              <Text style={styles.title}>Golden Chicken</Text>
              <Text style={styles.quantity}>2x</Text>
            </View>
            <Text style={styles.description}>Roasted golden chicken</Text>
            <Text style={styles.price}>$25.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.order}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeTitle}>Delivery Time</Text>
          <Text style={styles.time}>25 mins</Text>
        </View>
        <Text style={styles.priceTitle}>Total Price</Text>
        <View style={styles.btnContainer}>
          <Text style={styles.orderPrice}>$50.00</Text>
          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={()=>navigation.navigate("Payment")}>
            <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  cart: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cartImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
    gap: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E60023',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#282828',
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E60023',
  },
  order: {
    padding: 20,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    gap:10
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  timeTitle: {
    fontSize: 18,
    color: '#282828',
  },
  time: {
    fontSize: 18,
    color: '#E60023',
  },
  priceTitle: {
    fontSize: 18,
    color: '#282828',
  },
  orderPrice: {
    fontSize: 25,
    color: '#E60023',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E60023',
    padding:15,
    borderRadius: 10,
    justifyContent:"center",
    alignContent:"center"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

});
