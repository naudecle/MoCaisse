import {View, TouchableOpacity, Text, Image} from 'react-native'

function CameraHeader({title, navigation}){
    return(
        <View style={{flexDirection:'row',height:90, backgroundColor:'#b8860b'}}>
            <View style={{flex:1,justifyContent:'center', marginTop:8, width:980,height:100}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image 
                        style={{width:25, height:25, marginLeft:5}}
                        source={require('../assets/back_camera.png')}
                        resizeMode="contain"
                    />
                    
                </TouchableOpacity>
               
            </View>
            <View style={{flex:60, justifyContent:'center', marginTop:8}}>
                <Text style={{textAlign:'center',fontSize:28, fontWeight:'700', color:'#763f3f'}}>{title}</Text>
            </View>
        </View>
    );
};

export default CameraHeader;