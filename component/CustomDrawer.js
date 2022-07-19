import { SafeAreaView, Text, ScrollView, TouchableOpacity, View, Image } from "react-native";



function CustomDrawer(props){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#763f3f'}}>
            <View style={{height:150, alignItems:'center', justifyContent:'center'}}>
                <Image source={require('../assets/profile.png')}
                    style={{height:100, width:100, borderRadius:60}}
                />
            </View>
            <ScrollView style={{marginLeft:5, borderRadius:11}}>
                
                <TouchableOpacity 
                    style={{margin:20, backgroundColor:'#b8860b', borderRadius:15, height:32, width:250, alignContent:'center'}} 
                    onPress={()=>props.navigation.navigate('HomeTab')}
                    >
                    <Text style={{fontSize:20, color:'#763f3f', fontWeight:'700', textAlign:'center'}}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{margin:20, backgroundColor:'#b8860b', borderRadius:11, height:32, width:250, alignContent:'center'}} 
                    onPress={()=>props.navigation.navigate("Settings")}>
                    <Text style={{fontSize:20, color:'#763f3f', fontWeight:'700',textAlign:'center'}}>Settings</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};


export default CustomDrawer;