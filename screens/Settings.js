import React from "react";
import {SafeAreaView,View, TouchableOpacity, Text, Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomeHeader from "../component/CustomHeader";
import SettingCss from "../style/SettingsCss";
function Setting ({navigation}){
    return(
        <SafeAreaView style={SettingCss.container}>
            <CustomeHeader title="Settings" navigation={navigation}/>
            <View style={SettingCss.viewContainer}>
            <TouchableOpacity style={SettingCss.button}>
                <Text style={SettingCss.textButton}>Profile <Image style={{width:15, height:15, left:150}} source={require('../assets/back.png')}/></Text>
            </TouchableOpacity>

            <TouchableOpacity style={SettingCss.button}>
                <Text style={SettingCss.textButton}>Receipts<Image style={{width:15, height:15, left:139}} source={require('../assets/back.png')}/></Text>
            </TouchableOpacity>
            </View>
           
        </SafeAreaView>
    );
  
};

export default Setting;