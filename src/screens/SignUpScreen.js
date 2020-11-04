import React ,{useState} from "react";
import {View, StyleSheet} from "react-native";
import {Input, Button, Card} from "react-native-elements"
import { FontAwesome,Entypo,AntDesign } from '@expo/vector-icons';
import {storeDataJSON} from "../functions/AsyncStorageFuncions";

const SignUpScreen = (props) => {
    const [Name,setName] = useState("");
    const [SID,setSID] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

    return (
        <View style={styles.viewStyle}>
        <Card>
            <Card.Title>Welcome to BlogApp</Card.Title>
            <Card.Divider/>
            <Input
            leftIcon={<Entypo name="user" size={24} color="black" />}
            placeholder=' Name'
            onChangeText={ function(CurrentInput){
                setName(CurrentInput);
            }}
            />

            <Input
            leftIcon={<AntDesign name="idcard" size={24} color="black" />}
            placeholder=' Id'
            onChangeText={ function(CurrentInput){
                setSID(CurrentInput);
            }}
            />
            

            <Input
            leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
            placeholder=' E-mail Address'
            onChangeText={ function(CurrentInput){
                setEmail(CurrentInput);
            }}
            />
            

            <Input
            placeholder=' Password'
            leftIcon={<Entypo name="key" size={24} color="black" />}
            secureTextEntry={true}
            onChangeText={ function(CurrentInput){
                setPassword(CurrentInput);
            }}
            />
            

            <Button
            icon = {<AntDesign name="user" size={24} color="black" />}
            title = ' Sign Up'
            type='solid'
            onPress={ function(){
                let CurrentUser ={
                    name: Name,
                    sid: SID,
                    email: Email,
                    password: Password,
                };
                storeDataJSON(Email,CurrentUser);
                props.navigation.navigate("SignIn");
            }}
            />
            <Button
            type =  "clear"
            icon = {<AntDesign name="login" size={24} color="white" />}
            title = " Already have an account?"
            onPress={ function(){
                props.navigation.navigate("SignIn");
            }}
            /> 

        </Card>
    </View>

    );
};

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
    },
});

export default SignUpScreen;
