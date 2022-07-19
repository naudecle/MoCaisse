import React from "react";
import {SafeAreaView, View, Text, TouchableOpacity, Pressable} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import homeStyle from "../style/HomeCss";
import Cart from "./Cart";
import ShopList from "./ShopList";
import Setting from "./Settings";
import HomeCamera from "./HomeCamera";

import CustomeHeader from "../component/CustomHeader";
import CustomDrawer from "../component/CustomDrawer";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Home(){
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props => CustomDrawer(props)}>
                <Drawer.Screen name="HomeTab" component={TabNavigator}/>
                <Drawer.Screen name="Settings" component={Setting}/>
            </Drawer.Navigator>

            
            
        </NavigationContainer>
        
    );
    
};

const Hometab = (route)=>{
    const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';
    tabBarStyle = null
  if (routeName === 'Camera') {
    tabBarStyle = "display{'none'}";
  }

  return tabBarStyle;
}

function TabNavigator(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen 
                name="Mo Cashier" 
                component={HomeScreen}
                listeners ={({ navigation, route }) => ({
                    tabPress: (e) => {
                      // Prevent default action
                      e.preventDefault();
                
                      // Do something with the `navigation` object
                      navigation.navigate('Home')
                    }
                  })}
                options =
                {{
                    tabBarActiveBackgroundColor:'#b8860b', 
                    tabBarInactiveBackgroundColor:'#763f3f',
                    tabBarIcon:(props)=>(
                        <Ionicons name="qr-code" size={props.size} color={props.color}/>
                    ),
                    tabBarStyle:(route)=>( Hometab(route)),
                    tabBarActiveTintColor:'#763f3f',
                    tabBarInactiveTintColor:'#b8860b'
                }}
            />
            <Tab.Screen 
            name="Cart" 
            component={Cart} 
            options =
                {{
                    tabBarActiveBackgroundColor:'#b8860b', 
                    tabBarInactiveBackgroundColor:'#763f3f',
                    tabBarIcon:(props)=>(
                        <Ionicons name="cart" size={props.size} color={props.color}/>
                    ),
                    tabBarActiveTintColor:'#763f3f',
                    tabBarInactiveTintColor:'#b8860b'
                }}
            />
            <Tab.Screen 
                name="List of groceries" 
                component={ShopList} 
                options =
                {{
                    tabBarActiveBackgroundColor:'#b8860b', 
                    tabBarInactiveBackgroundColor:'#763f3f',
                    tabBarIcon:(props)=>(
                        <Ionicons name="list" size={props.size} color={props.color}/>
                    ),
                    
                    tabBarActiveTintColor:'#763f3f',
                    tabBarInactiveTintColor:'#b8860b'
                }}
            />
        </Tab.Navigator>
    );

}



function HomeScreen(){    
    return(
        
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} options={{headerShown:false}}/>
                <Stack.Screen name="Camera" component={HomeCamera} options={{headerShown:false}}/>
            </Stack.Navigator>
        
    )
    
};

function HomePage({navigation}){
    return(
        <SafeAreaView style={homeStyle.container}>
            <CustomeHeader title="Mo Cashier" navigation={navigation}/>
            <View style={homeStyle.ViewContainer}>
                <TouchableOpacity style={homeStyle.button} onPress={()=>navigation.navigate('Camera')}>
                    <Text style={homeStyle.buttonText}>Scan The product</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default Home; 

/*<View style={homeStyle.ViewContainer}>
                <TouchableOpacity style={homeStyle.button}>
                    <Text style={homeStyle.buttonText}>Scan the product</Text>
                </TouchableOpacity>
            </View>
            
             
    )
            
            */

            // function Camera(){
            //     //     return(
            //     //         <NavigationContainer independent={true}>
            //     //             <Cam.Navigator>
            //     //                 <Cam.Screen 
            //     //                     name="Camera"
            //     //                     component={HomeCamera}
            //     //                     options={{headerShown:false}}
            //     //                 />
            //     //             </Cam.Navigator> 
            //     //         </NavigationContainer>
            //     //     );
                    
            //     // }