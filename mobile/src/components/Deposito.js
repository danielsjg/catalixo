import React, {useEffect, useState} from 'react';
import { View, Text, AsyncStorage, StyleSheet } from 'react-native';
import api from '../services/api';
import { bold } from 'ansi-colors';
import { FlatList } from 'react-native-gesture-handler';

export default function Deposito({ tipo }) {

    const [deposito, setDeposito] = useState([]);

    useEffect(() => {
        async function loadDepositos() {
            const response = await api.get('/deposito', {
                params: { tipo }
            });
            setDeposito(response.data);
        }
        loadDepositos();
    }, []);

    console.log(deposito);

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