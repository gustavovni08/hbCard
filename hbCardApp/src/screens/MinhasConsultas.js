import { View, Text, StyleSheet} from "react-native";
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';




export default function MinhasConsultas(){

    return(
        <View style={styles.mainConstainer}>
            
            <View style={styles.userCard}>

                {/* //userProfilePhoto */}
                <View>
                <FontAwesome5 name="user-circle" size={38} color="black" />
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
                        <AntDesign name="down" size={17} color="black" />
                    </View>

            </View>

            
            <View style={styles.minhasConsultasContainer}>
                
                <View>
                    <Text style={styles.minhasConsultasHeader}>Minhas Consultas</Text>
                </View>

                //listaConsultas
                <View>

                </View>


            </View>

                <View style={styles.novaConsulta}>
                    <Ionicons name="add" size={24} color="white" />
                    <Text style={styles.novaConsultaFont}> Nova Consulta</Text>
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
        width:'60%',
        minWidth:260,
        maxWidth:560,

        
    },

    novaConsultaFont:{
        
        color: "#fff",
        fontSize: 22,
        fontWeight: 400,

    }


})