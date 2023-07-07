import { View, Text, Button } from 'react-native'
import React from 'react'
import Navigation from '../navigation/Navigation'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='segunda' onPress={()=>navigation.navigate("Segunda")}/>
      <Button title='Tercera' onPress={()=>navigation.navigate("Tercera")}/>

    </View>
  )
}

export default HomeScreen