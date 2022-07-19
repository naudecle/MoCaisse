import React from "react";
import {SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";

import homeStyle from "../style/HomeCss";
import CameraHeader from "../component/CameraHeader";
import Camera from '../component/Camera'

function HomeCamera({navigation}){
    return(
        <SafeAreaView style={homeStyle.container}>
            <CameraHeader title="Mo Cashier" navigation={navigation}/>
            <Camera/> 
        </SafeAreaView>
    )
    
};
export default HomeCamera; 