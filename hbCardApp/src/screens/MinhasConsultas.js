import { useState } from "react";
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";

// import ListaDeConsultas from "../components/minhasConsultas/ListaDeConsultas";

import CardConsulta from '../components/minhasConsultas/CardConsulta'

export default function MinhasConsultas(){

    const [lista, setLista] = useState([
        {
            consulta: 'Dentista',
            data:'24/09'
        },
        {
            consulta: 'Oftalmo',
            data:'24/09'
        },
        {
            consulta: 'Dentista',
            data:'24/10'
        },
    ])
    
    const item = ({item}) =>{
        return(
            <CardConsulta
            consulta={item.consulta}
            data={item.data}/>
        )
    
    }
    
    const adicionarConsulta = () => {
    
        const newConsulta = {
            consulta: 'otorrinolaringologista',
            data:'09/10'
        }
    
        setLista([...lista, newConsulta])
    
        console.log(lista)
    }


    return(
        <View style={styles.mainConstainer}>
            
            <View style={styles.userCard}>

                {/* //userProfilePhoto */}
                <View>
                    <TouchableOpacity>
                        <FontAwesome5 name="user-circle" size={38} color="black" />
                    </TouchableOpacity>
                </View>

                {/* //userInfo */}
                <View>
                    {/* //userName */}
                    <View>
                        <Text style={styles.UserName}>Vinícius Gustavo</Text>
                    </View>

                    {/* //userCode */}
                    <View>
                        <Text style={styles.userCode}>1684</Text>
                    </View>

                </View>

                {/* //showMore */}
                    <View style={styles.showMore}>
                        <TouchableOpacity>
                            <AntDesign name="down" size={17} color="black" />
                        </TouchableOpacity>
                    </View>

            </View>

            
            <View style={styles.minhasConsultasContainer}>
                
                <View>
                    <Text style={styles.minhasConsultasHeader}>Minhas Consultas</Text>
                </View>

                
                <View style={styles.listaConsulta}>
                    <View
                    style={styles.listaConsulta}>
                        <FlatList
                        data={lista}
                        renderItem={item}
                        />
                    </View>
                </View>


            </View>

                <View>
                    <TouchableOpacity 
                    style={styles.novaConsulta}
                    onPress={adicionarConsulta}>

                        <Ionicons name="add" size={24} color="white" />
                        <Text style={styles.novaConsultaFont}> Nova Consulta</Text>

                    </TouchableOpacity>
                    
                </View>

        </View>
    )

}

const styles = StyleSheet.create({

    mainConstainer: {
        flex: 1,
        width:'100%',
        alignItems: 'center',
        
        
    },

    userCard:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:50,
        width:'80%',
        minWidth:350,
        maxWidth:500,
        
    },

    UserName:{
        fontSize:18,
        fontWeight:'bold'
    },

    userCode:{
        fontSize:14,
    },

    showMore:{
        alignItems: 'center',
        justifyContent:'center',
        width:50, 
    },

    minhasConsultasContainer:{
        flex: 0.7,
        width:'80%',
        minWidth:360,
        maxWidth:540,
        marginTop: 20,
        // justifyContent: 'space-evenly'
    },

    minhasConsultasHeaderContainer:{
        width:'80%',
        minWidth:360,
        paddingRight:'2%',
    },

    minhasConsultasHeader:{
        fontSize: 19,
        fontWeight: '500',
    },

    novaConsulta:{
        backgroundColor:'#2191E3',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        padding: 14,
        width:'100%',
        minWidth:260,
        maxWidth:580,

        
    },

    novaConsultaFont:{
        
        color: "#fff",
        fontSize: 22,
        fontWeight: 400,

    },

    listaConsulta:{
        alignItems: 'center',
        justifyContent:'space-evenly',
        width:'100%',
        maxHeight: 300
    }


})