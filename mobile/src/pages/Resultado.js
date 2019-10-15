import React, { useState, useEffect} from 'react';
import { View, Text, AsyncStorage, Image, StyleSheet } from 'react-native';

import Deposito from '../components/Deposito';
import lixo from '../assets/lixo.png';

export default function Resultado({}) {

    var [tipo, setTipo] = useState([]);
    var [localizacao, setLocalizacao] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('tipo').then(storageTipo => {
            const tipoArray = storageTipo.split(',');
            setTipo(tipoArray);
        })
        AsyncStorage.getItem('localizacao').then(storageLocalizacao => {
            setLocalizacao(storageLocalizacao);
        })
        
    }, []);
    
    var showTipo = '';
    switch(tipo[0]) {
        case 'pilhasebaterias,': showTipo = 'Pilhas e Baterias'; break;
        case 'lampadas,': showTipo = 'Lâmpadas'; break;
        case 'pneus,': showTipo = 'Pneus'; break;
        case 'oleos,': showTipo = 'Óleos'; break;
        case 'eletronicos,': showTipo = 'Aparelhos Eletrônicos'; break;
    }

    tipo[0] += ',' + localizacao;

    return <View style={styles.fundo}>
        <View style={styles.centro}>
            <Image source={ lixo }  style={styles.logo}/>
        </View>
        <Text style={styles.titulo}>Depósitos de {showTipo}</Text>
        <View style={styles.espaco}>
        {tipo.map( tipo => <Deposito key={tipo} tipo={tipo}/>)}
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