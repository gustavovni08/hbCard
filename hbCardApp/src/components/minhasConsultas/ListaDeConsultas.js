import { FlatList, StyleSheet, View } from "react-native";

import CardConsulta from "./CardConsulta";

const lista = [
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
]

const item = ({item}) =>{
    return(
        <CardConsulta
        consulta={item.consulta}
        data={item.data}/>
    )

}

export default function ListaDeConsultas(){
    return(
        <View
        style={styles.listaConsulta}>
            <FlatList
            data={lista}
            renderItem={item}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    
    listaConsulta:{
        alignItems: 'center',
        justifyContent:'space-evenly',
        width:'100%',
    }

})