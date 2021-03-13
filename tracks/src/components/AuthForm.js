import React, {useState} from "react";
import {View,StyleSheet} from "react-native";
import {Text, Button, Input} from "react-native-elements";
import Spacer from "./Spacer";
const AuthForm= ({headerText, errorMessage,submitButtonText, onSubmit})=>{
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");
    return ( 
        <View style={styles.container}>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input label="Email"
            value={email}
            onChangeText={ setEmail } />
            <Spacer/>
            <Input
                secureTextEntry={true} 
                label="Password"
                value={password}
                onChangeText={ setPassword }
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage? <Text style={styles.errorMessage}>{errorMessage}</Text>:null}
            <Spacer>
            <Button title={submitButtonText}
            onPress={()=>onSubmit( { email, password } )}
            />
            </Spacer>
        </View>
    );
};

const styles= StyleSheet.create({
    errorMessage:{
        fontSize: 16,
        color: "red",
        marginLeft: 15
    }
});

export default AuthForm;