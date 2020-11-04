import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage ,Image} from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Header
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{ text: "The Office", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          />
         
          <Image style={styles.imagestyle}
            source={require('./../../assets/shadid.jpg')}
            justifyContent= 'center'
            alignItems= 'center'
          />
          <Text style={styles.textStyle}>Name : Shadid Intisar </Text>
          <Text style={styles.textStyle}>Born on : 16/12/1999  </Text>
          <Text style={styles.textStyle}>Address : Dhanmondi,Dhaka</Text>
          <Text style={styles.textStyle}>Works at : Unemployed</Text>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "black",
  },
  viewStyle: {
    flex: 1,
  },
  imagestyle: {
    height: 200,
    width: 150,
    resizeMode: 'stretch',
    justifyContent : 'center',
  },
});

export default ProfileScreen;