import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import api from '../services/api';

export default function Deposito( { tipo }) {

    const [deposito, setDeposito] = useState([]);

    var p1 = tipo.split(',').map(string => string.trim())[0];
    var p2 = tipo.split(',').map(string => string.trim())[2];
    var p3 = tipo.split(',').map(string => string.trim())[3];

    useEffect(() => {
        async function loadDepositos() {   
            const response = await api.get('/deposito', {
                params: { tipo: p1,
                          lat: p2,
                          long: p3
                        }
            });
            setDeposito(response.data);
        }
        loadDepositos();
    }, []);

    return (<View>
        <FlatList
            style={styles.list}
            data={deposito}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={styles.box}>
                    <View style={styles.linha}>
                        <Text style={styles.texto}>Nome: {item.nome}</Text>
                    </View>
                    <View style={styles.linha}>
                        <Text style={styles.texto}>Latitude: {item.latitude}</Text>
                        <Text style={styles.texto}>Longitude: {item.longitude}</Text>
                    </View>
                </View>
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