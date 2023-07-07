import { View, Text, TextInput, Button } from 'react-native'
import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';



const SecondScreen = () => {
    const [text, changeText] = useState('');
    const { dispatch } = useContext(AppContext)


    return (
        <View>
            <Text style={{ color: 'black', fontSize: 25 }}>Ingrese texto a guardar</Text>
            <TextInput style={{ color: 'black', fontSize: 25, backgroundColor: 'white' }} onChangeText={changeText} />
            <Button title='Guardar texto ' onPress={() => { dispatch({payload:text,type:'CHANGE_TEXT'}) }} />
            <Text style={{ color: 'black', fontSize: 46 }} >{text}</Text>
        </View>
    )
}

export default SecondScreen