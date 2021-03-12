import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Button
} from "react-native";

const SigninScreen= ({navigation})=>{
    return (
    <View>
        <Text style={{fontSize:48}}>SigninScreen</Text>
        <Button
        title="Go to Signin"
        onPress={()=> navigation.navigate("Signup")}
        />
        <Button
        title="Go to main flow"
        onPress={()=> navigation.navigate("mainFlow")}
        />
    </View> 
    );
}

const styles= StyleSheet.create({});

export default SigninScreen;