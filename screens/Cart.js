import React from "react";
import {SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomeHeader from "../component/CustomHeader";
import cartStyle from "../style/CartCss";

function Cart({navigation}){
    return(
        <SafeAreaView style={cartStyle.container}>
            <CustomeHeader title="Cart" navigation={navigation}/>
            <View style={cartStyle.viewContainer}>
            <Text>Cart Page</Text>
        </View>
        </SafeAreaView>
        
    );
    
};


export default Cart;