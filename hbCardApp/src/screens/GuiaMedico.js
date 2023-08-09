import { 
        View, 
        Text,
        FlatList,
        TextInput, 
        StyleSheet,  
        TouchableOpacity } from "react-native"

import { useState } from "react";

import { AntDesign } from '@expo/vector-icons';
import CardConsulta from '../components/minhasConsultas/CardConsulta';

export default function GuiaMedico(){
    


    
    const [lista, setLista] = useState([

        {
            consulta: 'Angiologista',
            goTo: 'Marca Consulta'
        },
        
        {
            consulta: 'Cardiologista',
            goTo: 'Marca Consulta'
        },
        
        {
            consulta: 'Dermatologista',
            goTo: 'Marca Consulta'
        },

    ])
    
    const item = ({item}) =>{
        return(
            <CardConsulta
            consulta={item.consulta}
            goTo={item.goTo}
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
            <Text style={styles.labelFont}> Todas as consultas</Text>
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
        minWidth:400,
        maxWidth:500,

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
        width:400,
        marginTop:20,
        
        // alignItems:'center'
    },

    labelFont:{
        color:'#000',
        fontWeight:'bold',
        fontSize:19,
        paddingRight:'27%'
    }
})