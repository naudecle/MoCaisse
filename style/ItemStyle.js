import { StyleSheet } from "react-native";


const itemStyle = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:24,
        borderBottomColor:'#b8860b',
        borderBottomWidth:1,
    },

    textInput:{
        borderWidth:2,
        borderColor:'#b8860b',
        width:'70%',
        marginRight: 8,
        padding: 8,
    },
    buttonText:{
        fontSize:20,
        color:'#763f3f',
        textAlign:'center',
        alignSelf:'center',
    },
    button:{
        alignSelf:'center',
        justifyContent:'flex-start',
        backgroundColor:'#A07154',
        borderRadius:15,
        height:40,
        width:110,
    },

   
});

export default itemStyle;