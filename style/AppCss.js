import { StyleSheet } from "react-native";

const AppStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffe4c4',
        alignItems:'center',
        
    },

    viewContainer:{
        flex:1,
        alignContent:'center',
        margin:50,
        justifyContent:'space-evenly'
    },

    text:{
        color:'#763f3f',
        fontSize:16,
        fontStyle:'italic',
        fontWeight:'bold'
    },

    button:{
        borderRadius: 15,
        backgroundColor:'#A07154',
        height:40,
        width:250,
        alignSelf:'center',
    },
    textButton:{
        fontSize:25,
        borderBottomColor:'#A07154',
        color:'#b8860b',
        textAlign:'center',
    }
});

export default AppStyle;