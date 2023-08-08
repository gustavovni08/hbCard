import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CardConsulta(props){
    return(
        <View>
            <TouchableOpacity style={styles.cardContainer}>
                <Text style={styles.cardFont}>{props.consulta}</Text>
                <Text style={styles.cardFont}>{props.data}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor:'#d9d9d9',
        width: 320,
        padding:14,
        margin:10,
    },

    cardFont:{
        color:'#000',
        fontWeight:'bold',
    }
})