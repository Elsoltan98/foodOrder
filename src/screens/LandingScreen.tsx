import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Location from 'expo-location';
import { useNavigation } from './../utils'

const screenWidth = Dimensions.get("screen").width;

const LandingScreen = () => {
    const { navigate } = useNavigation()

    const [errMsg, setErrMsg] = useState('')
    const [address, setAddress] = useState()
    const [displayAddress, setDisplayAddress] = useState("")

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== "granted") {
                setErrMsg('Permission to access location is not granted.')
            }

            let location: any = await Location.getCurrentPositionAsync();

            const { coords } = location;

            if(coords) {
                const { longitude, latitude } = coords;

                let addressResponse: any = await Location.reverseGeocodeAsync({latitude, longitude})

                for(let item of addressResponse) {
                    setAddress(item)
                    let currentAddress = `${item.name}, ${item.street}, ${item.postalCode}, ${item.country}`
                    setDisplayAddress(currentAddress);

                    if(currentAddress.length > 0) {
                        setTimeout(() => {
                            navigate('homeStack')
                        }, 2000)
                    }



                    return;
                }
            }

        })();
    }, [])


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
