import React from "react";
import {Image,View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import logStyle from "../style/LogCss";
import Home from "./Home";
import Register from "./Register";

const LogStack = createNativeStackNavigator();

const Log = () =>{
    return(
        <NavigationContainer independent={true}>
            <LogStack.Navigator>
                <LogStack.Screen
                    name="MainPage"
                    component={LogForm}
                    options={{title:'Sign In', headerStyle:{backgroundColor:'#b8860b'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:28, fontWeight:'700'},headerShown : true}}
                />

                <LogStack.Screen
                    name="HomePage"
                    component={Home}
                    options={{headerShown:false}}
                />

                <LogStack.Screen
                    name="RegisterPage"
                    component={Register}
                    options={{title:'Sign In', headerStyle:{backgroundColor:'#b8860b'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:28, fontWeight:'700'},headerShown : true}}
                />
            </LogStack.Navigator>
       
        </NavigationContainer>

        
    );
}

const LogForm = ({navigation}) =>{
    return(
        <KeyboardAvoidingView style={logStyle.container} behavior='height'>
            <View style={logStyle.viewContainer}>
                <ImageBackground source={require('../assets/log-in.png')}  
                    style={{width:90, height:90, top:0, borderRadius:200}}
                />
                    
                    <Text style={logStyle.text}><Image source={require('../assets/email.png')} style={{width:26,height:26, top:10}}/>Email</Text>
                    <TextInput
                        style={logStyle.input}
                        placeholder="Enter Your mail"
                    />
                    <Text style={logStyle.text}><Image source={require('../assets/password.png')} style={{width:24,height:24, top:1}}/>Password</Text>
                    <TextInput 
                        style={logStyle.input}
                        placeholder="Enter Your password"
                    />
                    <TouchableOpacity style={logStyle.botton} onPress={()=>navigation.navigate("HomePage")}>
                        <Text style={logStyle.textButton}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={logStyle.signtext}>Don't have an account?
                        <TouchableOpacity onPress={()=>navigation.navigate("RegisterPage")}>
                            <Text style={logStyle.registerText}>Sign Up</Text>
                        </TouchableOpacity>
                    </Text>
            </View>
        </KeyboardAvoidingView>
        
    )
}


export default Log;