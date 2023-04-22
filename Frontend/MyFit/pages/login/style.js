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
    containerInput:{
        flexDirection:"row",
        width:'80%',
        height:50,
        borderColor:'#000',
        borderWidth: 1,
        borderRadius:20,
        backgroundColor:'#fff',
        padding:10
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