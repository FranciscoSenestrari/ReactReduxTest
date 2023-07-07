import { View, Text, Button } from 'react-native'
import React from 'react'
import {styles} from './style'
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>React Redux </Text>
      <Button title='Guardar Texto' onPress={()=>navigation.navigate("GuardarTexto")}/>
      <Button title='Mostrar Texto' onPress={()=>navigation.navigate("MostrarTexto")}/>

    </View>
  )
}

export default HomeScreen