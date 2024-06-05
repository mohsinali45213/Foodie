import {FlatList, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import Icons from '../../Components/Icons';
import Home from '../Home';
import Profile from '../Profile';
import Notification from '../Notification';
import Shop from '../Shop';
import Likes from '../Likes';
import {TouchableOpacity} from 'react-native';
import { useEffect, useRef } from 'react';
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const TabArr = [
    {
      name: 'Home',
      activeIcons: 'home',
      inActiveIcons: 'home-outline',
      type: 'MaterialCommunityIcons',
      component: Home,
    },
    {
      name: 'Likes',
      activeIcons: 'cards-heart',
      inActiveIcons: 'cards-heart-outline',
      type: 'MaterialCommunityIcons',
      component: Likes,
    },
    {
      name: 'Shop',
      activeIcons: 'shopping',
      inActiveIcons: 'shopping-outline',
      type: 'MaterialCommunityIcons',
      component: Shop,
    },
    {
      name: 'Notification',
      activeIcons: 'notifications',
      inActiveIcons: 'notifications-outline',
      type: 'Ionicons',
      component: Notification,
    },
    {
      name: 'Profile',
      activeIcons: 'user',
      inActiveIcons: 'user-o',
      type: 'FontAwesome',
      component: Profile,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}>
      {TabArr?.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigation;

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected
  const viewRef = useRef()

  useEffect(() => {
    if(focused){
      viewRef.current.animate({0:{scale:1,},1:{scale:1.3}})
    }else{
      viewRef.current.animate({0:{scale:1.3,},1:{scale:1,}})
    }
  },[focused])
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    activeOpacity={1}
    >
      <Animatable.View
      duration={500}
      ref={viewRef}
      >
        <Icons
          name={focused? item.activeIcons : item.inActiveIcons}
          type={item.type}
          size={28}
          color={focused? '#E60023' : 'gray'}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
});
