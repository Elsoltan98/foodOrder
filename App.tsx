import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LandingScreen from './src/screens/LandingScreen';

import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from './src/screens/HomeScreen';

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator({
      landing: LandingScreen
    }, {
      defaultNavigationOptions: {
        headerShown: false
      }
    })
  },
  homeStack: createBottomTabNavigator({
    home: {
      screen: createStackNavigator({
        HomePage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          let icon = focused === true ? require('./src/images/home_icon.png') : require('./src/images/home_icon.png');
          return <Image source={icon} style={styles.tabBarIcon} />
        }
      }
    },
    offer: {
      screen: createStackNavigator({
        OfferPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          let icon = focused === true ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png');
          return <Image source={icon} style={styles.tabBarIcon} />
        }
      }
    },
    cart: {
      screen: createStackNavigator({
        CartPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          let icon = focused === true ? require('./src/images/cart_icon.png') : require('./src/images/cart_n_icon.png');
          return <Image source={icon} style={styles.tabBarIcon} />
        }
      }
    },
    account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          let icon = focused === true ? require('./src/images/account_icon.png') : require('./src/images/account_n_icon.png');
          return <Image source={icon} style={styles.tabBarIcon} />
        }
      }
    }
  })
})

const AppNavigation = createAppContainer(switchNavigator);


export default function App() {
  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 30,
    height: 30
  }
})
