import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext'
import { styles } from './style'
const AnotherScrenn = () => {
  const {
    state: { textInput },
} = useContext(AppContext)

  return (
    <View >
      <Text style={styles.textOutput}>{textInput}</Text>
    </View>
  )
}

export default AnotherScrenn