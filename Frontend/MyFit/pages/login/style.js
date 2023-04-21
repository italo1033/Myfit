import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    ContainerGeral:{
        flex:1,
        backgroundColor:'#fff',
    },
    Header:{
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'#000',
        height:'50%',
        borderBottomLeftRadius:170,
    },
    logo:{
        width:150,
        height:120,
    },
    Main:{
        height:'50%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        gap:10
    },
    containerText:{
        width:'100%',
        justifyContent:"center",
        alignItems:'center'
    },
    text:{
        width:'77%', 
    },
    titleImage:{
        color:'#fff',fontSize:25,marginTop:10
    },

    footer:{
        width:'100%',
        justifyContent:"center",
        alignItems:'center',
        marginTop:80
    }
})