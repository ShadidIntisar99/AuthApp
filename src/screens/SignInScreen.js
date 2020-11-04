import React ,{useState} from "react";
import {View, StyleSheet} from "react-native";
import {Input, Button, Card} from "react-native-elements"
import { FontAwesome,Entypo,AntDesign } from '@expo/vector-icons';
import {AuthContext} from "../providers/AuthProvider";
import {getDataJSON} from "../functions/AsyncStorageFuncions";


const SignInScreen = (props) => {
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

    return (
        <AuthContext.Consumer>
        {(auth)=>(<View style={styles.viewStyle}>
            <Card>
                <Card.Title>Welcome to AuthApp</Card.Title>
                <Card.Divider/>
                <Input
                leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
                placeholder='E-mail Address'
                onChangeText={ function(CurrentInput){
                setEmail(CurrentInput);
            }}
            />

                <Input
                placeholder='Password'
                leftIcon={<Entypo name="key" size={24} color="black" />}
                secureTextEntry={true}
                onChangeText={ function(CurrentInput){
                    setPassword(CurrentInput);
                }}
                />

                <Button
                icon = {<AntDesign name="login" size={24} color="black" />}
                title = ' Sign In'
                type='solid'
                onPress={async function(){
                  let UserData = await getDataJSON(Email);
                  if(UserData.password == Password){
                     auth.setIsLoggedIn(true);
                     auth.setCurrentUser(UserData);
                  }
                  else{
                      alert("Login Failed");
                      console.log(UserData);
                  }

                }}
                />
                <Button
                type =  "clear"
                icon = {<AntDesign name="user" size={24} color="black" />}
                title = " Don't have an account?"
                onPress={ function(){
                    props.navigation.navigate("SignUp");
                }}
                /> 

            </Card>
        </View>)}
        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
  viewStyle:{
      flex: 1,
      justifyContent: "center",
      backgroundColor: "transparent",
  },
}); 

export default SignInScreen;
