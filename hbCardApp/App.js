import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import MinhasConsultas from './src/screens/MinhasConsultas';
import MarcaConsulta from './src/screens/MarcaConsulta';
import GuiaMedico from './src/screens/GuiaMedico';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Minhas Consultas" component={MinhasConsultas}  options={{ headerShown: false }}/>
        <Stack.Screen name="Guia médico" component={GuiaMedico} />
        <Stack.Screen name="Marca Consulta" component={MarcaConsulta}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backGround:{
    backgroundColor:'#f1f1f1'
  }
})


