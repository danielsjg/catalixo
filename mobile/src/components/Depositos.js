import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import openMap from 'react-native-open-maps';
import api from '../services/api';

export default function Depositos({ navigation }) {

    var [depositos, setDepositos] = useState([]);

    var localizacao = navigation.getParam('params').localizacao;
    var tipo = navigation.getParam('params').tipo;

    useEffect(() => {
        async function loadDepositos(localizacao, tipo) {   
            var lat = localizacao.split(',').map(string => string.trim())[0];
            var long = localizacao.split(',').map(string => string.trim())[1];
            var response = await api.get('/deposito', {
                params: {
                    tipo: tipo,
                    latitude: lat,
                    longitude: long
                }
            });
            setDepositos(response.data);
        }
        loadDepositos(localizacao, tipo);
    }, [tipo]);

    
    return (<View>
        <FlatList
            style={styles.list}
            data={depositos}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableHighlight onPress={() => openMap({latitude: item.latitude, longitude: item.longitude})}>
                    <View style={styles.box}>
                        <View style={styles.linha}>
                            <Text style={styles.texto}>Nome: {item.nome}</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text style={styles.texto}>Latitude: {item.latitude}</Text>
                            <Text style={styles.texto}>Longitude: {item.longitude}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            )}
        />
    </View>);
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#2196f3',
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        borderRadius: 2,
        borderColor: '#ddd'
    },

    texto: {
        margin: 5,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },

    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});