import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardGuiaMedico(props){
    
    
    const navigation = useNavigation()
    const navegar = () =>{
        
        navigation.navigate('Marca Consulta')
        
    }
    
    return(
        <View>
            <TouchableOpacity 
            style={styles.cardContainer}
            onPress={navegar}>
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
        backgroundColor:'#fff',
        width: '95%',
        // maxHeight:400,
        // minWidth:200,
        padding:14,
        margin:10,
        // marginLeft:20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },

    cardFont:{
        color:'#000',
        fontWeight:'bold',
    }
})