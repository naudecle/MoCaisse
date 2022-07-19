import { StyleSheet } from "react-native";


const logStyle = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: 'rgba(255,228,196,0.6)'
    },
    viewContainer:{
        flex:1,
        alignItems:'center',
        margin:50,
        justifyContent:'space-evenly',
    },
    titles:{
        fontSize:24,
        color:'#b8860b',
        justifyContent:'center'
    },
    text:{
        fontSize:22,
        borderBottomColor:'#A07154',
        color:'#763f3f',
        alignSelf:'flex-start'
    },
    input:{
        borderBottomColor:'#A07154',
        borderBottomWidth:2,
      
        borderColor:'#763f3f',
        fontSize:16,
        margin:10,
        height:40,
        width:300,
        backgroundColor: 'rgba(255,228,196,0.3)',
        color:'#763f3f',
        borderRadius: 15,
        paddingLeft:10
    },
    textButton:{
        fontSize:20,
        fontWeight:'bold',
        color:'rgba(160, 113, 84, 0.9)',
        textAlign:'center',
    },
    botton:{
        borderRadius: 15,
        borderColor:'#b8860b',
        borderWidth:2,
        borderRightColor: '#b8860b',
        borderLeftColor: '#b8860b',
        backgroundColor:'#f9e4b8',
        
        height:38,
        width:250,
    },
    registerText:{
        color:'#b8860b',
        fontSize:15,
        fontWeight:'bold',
    },
    signtext:{
        color:'#A07154',
        fontSize:16,
        fontWeight:'bold',

    }

});

export default logStyle;