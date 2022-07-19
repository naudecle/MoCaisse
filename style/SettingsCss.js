import { StyleSheet } from "react-native";

const SettingCss = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(255,228,196,0.6)',
    },

    viewContainer:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        margin:50,
    },
    button:{
        height:40,
        width:250,
        borderColor:'#b8860b',
        borderRadius:15,
        borderWidth:4,
    },
    textButton:{
        fontSize:20,
        color:'#763f3f',
        textAlign:'left',
        marginLeft:10
    }
});

export default SettingCss;