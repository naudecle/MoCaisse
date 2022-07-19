import React from "react";
import { SafeAreaView,View,Image, Text, TextInput,TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignStyle from "../style/RegisterCss";

function Register(){
    return(
        <SafeAreaView style={SignStyle.container}>
            <View style={SignStyle.ViewContainer}>
                <Image source={require('../assets/signup.png')}
                    style={{width:80,top:0,height:80}}
                />
                

                <Text style={SignStyle.text}><Image source={require('../assets/id-card.png')} style={{width:28,height:28, top:6}}/>Name</Text>

                <TextInput 
                    style={SignStyle.input} 
                    placeholder="Name"
                />
                
                <Text style={SignStyle.text}><Image source={require('../assets/email.png')} style={{width:26,height:26, top:10}}/>Email</Text>
                
                <TextInput 
                    style={SignStyle.input} 
                    placeholder="Email"
                />
                
                <Text style={SignStyle.text}><Image source={require('../assets/password.png')} style={{width:24,height:24, top:1}}/>New Password</Text>
                
                <TextInput 
                    style={SignStyle.input} 
                    placeholder="Enter a password"
                />
                
                <Text style={SignStyle.text}><Image source={require('../assets/password.png')} style={{width:24,height:24, top:1}}/>Confirm Password</Text>
                
                <TextInput 
                    style={SignStyle.input} 
                    placeholder="Confirm your password"
                />
                
                <TouchableOpacity style={SignStyle.Button}>
                    <Text style={SignStyle.textbutton}>Register</Text>
                </TouchableOpacity>

                <Text style={SignStyle.accountText}>Already an account?
                    <TouchableOpacity>
                        <Text style={SignStyle.logText}>Sign In</Text>
                    </TouchableOpacity>
                </Text>
           
            </View>
        </SafeAreaView>
       
    )
   
};

export default Register;