import React, { useState } from 'react';
import { View, Text, AsyncStorage, TextInput, Button, Image, StyleSheet } from 'react-native';

import lixo from '../assets/lixo.png';

export default function Principal({ navigation }) {
    const [localizacao, setLocalizacao] = useState('');

    async function handleSubmit(loc) {
        if (localizacao) {
            await AsyncStorage.setItem('localizacao', localizacao);
        } else {
            await AsyncStorage.setItem('localizacao', loc);
        }
        navigation.navigate('Tipos');
    }

    return <View style={styles.fundo}>
        <View style={styles.centro}>
            <Image source={ lixo }  style={styles.logo}/>
        </View>
        <View style={styles.box}>
            <Text style={styles.label}>Informe sua localização</Text>
            <TextInput style={styles.input}
            placeholder='Latitude, Longitude'
            placeholderTextColor='#999'
            onChangeText={setLocalizacao}
            onEndEditing={handleSubmit}
            value={localizacao}/>
        </View>
        <View style={styles.box}>
            <Text style={styles.label}>Utilizar GPS</Text>
            <Button title="Localização"
            onPress={handleSubmit}/>
        </View>
        <View style={styles.box}>
            <Text style={styles.label}>Listar Todos Depósitos</Text>
            <Button title="Depósitos"
            onPress={() => handleSubmit('0, 0')}/>
        </View>
    </View>
}

const styles = StyleSheet.create ({

    fundo: {
        flex: 1,
        backgroundColor: '#56CCF2'
    },

    box: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
        
    },

    label: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },

    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 2,
        paddingHorizontal: 40,
        fontSize: 16,
        height: 44,
        marginBottom: 20
    },

    centro: {
        flex: 1,
        margin: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        borderRadius: 20
    }

});