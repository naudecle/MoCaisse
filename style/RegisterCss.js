import { StyleSheet } from "react-native";

const SignStyle = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'rgba(255,228,196,0.6)',
    },

    ViewContainer:{
        flex:1,
        alignItems:'center',
        margin:50,
        justifyContent:'space-evenly'
    },

    text:{
        fontSize:22,
        borderBottomColor:'#A07154',
        color:'#763f3f',
        alignSelf:'flex-start',
    },

    input:{
        borderBottomColor:"#A07154",
        borderBottomWidth:2,
        borderColor:'#763f3f',
        fontSize:16,
        margin:10,
        height:40, 
        width:300,
        backgroundColor:'#fff',
        paddingLeft:10
    },
    Button:{
        borderRadius:15,
        borderBottomColor:'#b8860b',
        borderBottomWidth:2,
        backgroundColor:'#A07154',
        height:32,
        width:250,
        top:10,
    },
    textbutton:{
        fontSize:20,
        color:'#763f3f',
        textAlign:'center',
        fontWeight:'bold',
    },

    accountText:{
        fontSize:22,
        borderBottomColor:'#A07154',
        color:'#763f3f',
        alignSelf:'flex-start',
        top:20,
    },

    logText:{
        color:'#b8860b',
        fontSize:16,
        fontWeight:'bold',
    }

});

export default SignStyle;