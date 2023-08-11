import { View, Text, TouchableOpacity, Picker, StyleSheet } from "react-native";
import { Feather, AntDesign  } from '@expo/vector-icons';

export default function MarcaConsulta() {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.h1Container}>
                <Text style={styles.h1Font}>Angiologista</Text>
                <TouchableOpacity> 
                    <Feather name="info" size={24} color="black" />
                </TouchableOpacity>
               
            </View>

            <View style={styles.formContainer}>
                
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.inputFont}>Clínica</Text>
                    </View>
                    <View>
                        <Picker style={styles.selectInput}/>
                    </View>
    
                </View>


                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.inputFont}>Médico</Text>
                    </View>
                    <View>
                        <Picker style={styles.selectInput}/>
                    </View>
    
                </View>

                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.inputFont}>Agendamento</Text>
                    </View>
                    <View>
                        <Picker style={styles.selectInput}/>
                    </View>
    
                </View>

                <View style={styles.buttonContainer}>
                    <View >
                        <TouchableOpacity style={styles.botaoAvancar}>
                            <Text style={styles.buttonFont}>Avançar</Text>
                            <AntDesign name="arrowright" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            

            

        </View>
        
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        
    },

    h1Container:{
        width:'80%',
        justifyContent: "space-between",
        alignItems:'center',
        flexDirection:'row'
    },

    h1Font:{
        fontSize:22,
        fontWeight:600,
    },

    formContainer:{
        flex:0.8,
        width:'80%',
        marginTop:30,

    },

    inputContainer:{
        width:'100%',
        marginTop:10,
    },

    inputFont:{
        fontSize:18,
        fontWeight:500,
    },

    selectInput:{
        borderStyle: 'none',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,

        padding:4,
        marginTop:10,
        marginBottom:5
    },

    buttonContainer:{
        width:'100%',
        alignItems:"flex-end",
        
    },

    botaoAvancar:{
        backgroundColor:'#2191E3',
        padding: 14,
        
        flexDirection: "row",
        width:'100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,

        justifyContent:"space-evenly",
        marginTop:10
    },

    buttonFont:{
        fontWeight:500,
        color:"#fff",
        fontSize:15,
    }

})
