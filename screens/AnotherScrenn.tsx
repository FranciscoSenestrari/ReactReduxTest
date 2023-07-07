import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext'
const AnotherScrenn = () => {
  const {
    state: { textInput },
} = useContext(AppContext)

  return (
    <View>
      <Text>{textInput}</Text>
    </View>
  )
}

export default AnotherScrenn