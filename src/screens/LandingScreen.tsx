import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Location from 'expo-location';

const screenWidth = Dimensions.get("screen").width;

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation} />
      <View style={styles.body}>
        <Image
          source={require("./../images/delivery_icon.png")}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your delivery address</Text>
        </View>
          <Text style={styles.addressText}>Waiting for current location</Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  deliveryIcon: {
    width: 120,
    height: 120,
    marginBottom: 10
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center"
  },
  addressTitle: {
      fontWeight: "200",
      color: "#7D7D7D",
      fontSize: 22
  },
  addressText: {
      fontSize: 20,
      fontWeight: "200",
      color: "#4f4f4f"
  },
  footer: {
    flex: 1,
  },
});

export default LandingScreen;
