import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

import lixo from '../assets/lixo.png';

export default function Tipos({ navigation }) {

    var localizacao = navigation.getParam('localizacao');

    async function handleSubmit(tipo) {
        var params = { localizacao, tipo }
        navigation.navigate('Resultado', { params });
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