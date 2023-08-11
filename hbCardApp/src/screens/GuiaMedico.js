import { 
        View, 
        Text,
        FlatList,
        TextInput, 
        StyleSheet,  
        TouchableOpacity } from "react-native"

import { useState } from "react";

import { AntDesign } from '@expo/vector-icons';
import CardGuiaMedico from "../components/guiaMedico/CardGuiaMedico";

export default function GuiaMedico(){
    


    //lista que a gente puxa do back com todos os médicos disponíveis
    const [lista, setLista] = useState([

        {
            consulta: 'Angiologista',
        },
        
        {
            consulta: 'Cardiologista',
        },
        
        {
            consulta: 'Dermatologista',
        },

    ])
    
    const item = ({item}) =>{
        return(
            <CardGuiaMedico
            consulta={item.consulta}
            />
        )
    
    }

    return(
        <View style={styles.mainContainer}>
           
            <View style={styles.searchBarContainer}>
                <TextInput
                style={styles.searchBarInput}
                />
                <View>
                    <TouchableOpacity>
                        <AntDesign name="search1" size={19} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            
            <View style={styles.guiaMedicoContainer}>

            <View style={styles.labelcontainer}>
                <Text style={styles.labelFont}> Todas as consultas</Text>
            </View>

            
            <FlatList
            style={styles.guiaMedicolistaContainer}
            data={lista}
            renderItem={item}
            />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: "center",
        marginTop:50,

    },

    searchBarContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff',

        width:'80%',

        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        padding:4,
    },

    searchBarInput:{
        width:'100%',
    },

    guiaMedicoContainer:{
        width:'100%',
        alignItems:'center',
        marginTop:40,
        
        // alignItems:'center'
    },

    guiaMedicolistaContainer:{
        width:'80%',
        marginTop:20,
        
        // alignItems:'center'
    },

    labelcontainer:{
        justifyContent:"flex-start",
        width:'80%',
    },

    labelFont:{
        color:'#000',
        fontWeight:600,
        fontSize:19,
        
    }
})