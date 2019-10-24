import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import Depositos from '../components/Depositos';
import lixo from '../assets/lixo.png';

export default function Resultado({ navigation }) {

    var localizacao = navigation.getParam('params').localizacao;
    var tipo = navigation.getParam('params').tipo;

    function handleSubmit() {
        navigation.navigate('Principal');
    }

    var showTipo = '';
    switch(tipo) {
        case 'pilhasebaterias': showTipo = 'Pilhas e Baterias'; break;
        case 'lampadas': showTipo = 'Lâmpadas'; break;
        case 'pneus': showTipo = 'Pneus'; break;
        case 'oleos': showTipo = 'Óleos'; break;
        case 'eletronicos': showTipo = 'Aparelhos Eletrônicos'; break;
    }

    return <View style={styles.fundo}>
        <View style={styles.centro}>
            <Image source={ lixo }  style={styles.logo}/>
        </View>
        <Text style={styles.titulo}>Depósitos de {showTipo}</Text>
        <View style={styles.espaco}>
        <Depositos navigation={navigation}/>
        </View>
    </View>
}

const styles = StyleSheet.create ({

    fundo: {
        flex: 1,
        backgroundColor: '#56CCF2'
    },

    titulo: {
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },

    centro: {
        flex: 1,
        margin: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        borderRadius: 20
    },

    espaco: {
        flex: 3
    }

});