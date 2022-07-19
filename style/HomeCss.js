import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({

    container:{
        flex:1,
    },
    ViewContainer:{
        flex:1,
        top:0,
        backgroundColor:'#ffe4c4',
        justifyContent:'center',
        alignContent:'center',
    },
    button:{
        alignSelf:'center',
        backgroundColor:'#A07154',
        borderRadius:15,
        height:35,
        width:251,
    },
    buttonText:{
        fontSize:22,
        color:'#763f3f',
        textAlign:'center',
    }

});

export default homeStyle;