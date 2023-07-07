import { View, Text, TextInput, Button } from 'react-native'
import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { styles } from './style';



const SecondScreen = () => {
    const [text, changeText] = useState('');
    const { dispatch } = useContext(AppContext)


    return (
        <View>
            <Text style={styles.subTitle}>Ingrese texto a guardar</Text>
            <TextInput style={styles.textInput} onChangeText={changeText} />
            <Button title='Guardar texto ' onPress={() => { dispatch({payload:text,type:'CHANGE_TEXT'}) }} />
            <Text style={styles.textOutput}>{text}</Text>
        </View>
    )
}

export default SecondScreen