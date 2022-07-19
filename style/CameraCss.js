import { StyleSheet } from "react-native";

const CameraStyle = StyleSheet.create({
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
        marginBottom:30
    },
    buttonText:{
        fontSize:22,
        color:'#763f3f',
        textAlign:'center',
        

    },
    barcode:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 20,
        width:300,
        alignSelf:'center'
    },
});
export default CameraStyle;