import React, { useState, useEffect } from 'react';
import { View, Button, AsyncStorage, Image, StyleSheet } from 'react-native';

import lixo from '../assets/lixo.png';
import { NavigationEvents } from 'react-navigation';

export default function Tipos({ navigation }) {

    const [localizacao, setLocalizacao] = useState([]);
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('localizacao').then(storageLocalizacao => {
            const localizacaoArray = storageLocalizacao.split(',').map(localizacao => localizacao.trim());
            setLocalizacao(localizacaoArray);
        })
    }, []);

    
    async function handleSubmit(tipo) {
        await AsyncStorage.setItem('tipo', tipo);
        navigation.navigate('Resultado');
    }

    return <View style={styles.fundo}>
        <View style={styles.centro}>
            <Image source={ lixo }  style={styles.logo}/>
        </View>
        <View style={styles.container}>
            <Button title="Pilhas e Baterias"
                onPress={() => handleSubmit('pilhasebaterias')}/>
        </View>
        <View style={styles.container}>
            <Button title="Lâmpadas"
            onPress={() => handleSubmit('lampadas')}/>
        </View>
        <View style={styles.container}>
            <Button title="Aparelhos Eletrônicos"
            onPress={() => handleSubmit('eletronicos')}/>
        </View>
        <View style={styles.container}>
            <Button title="Medicamentos"
            onPress={() => handleSubmit('medicamentos')}/>
        </View>
        <View style={styles.container}>
            <Button title="Pneus"
            onPress={() => handleSubmit('pneus')}/>
        </View>
        <View style={styles.container}>
            <Button title="Óleos"
            onPress={() => handleSubmit('oleos')}/>
        </View>
        
    </View>
}

const styles = StyleSheet.create ({

    fundo: {
        flex: 1,
        backgroundColor: '#56CCF2'
    },

    container: {
        margin: 10
    },


    centro: {
        flex: 1,
        margin: 100,
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        borderRadius: 20
    }

});