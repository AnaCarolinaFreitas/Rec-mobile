import React from 'react';
import { filmes } from '../data/homeData' ;
import { View, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Favorito</Text>
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/0/0b/Little_Women_2019.jpeg' }} 
                style={styles.image}
            />
            <View style={styles.stars}>
            <Ionicons name="star" size={24} color="yellow" />
            <Ionicons name="star" size={24} color="yellow" />
            <Ionicons name="star" size={24} color="yellow" />
            <Ionicons name="star" size={24} color="yellow" />
            <Ionicons name="star" size={24} color="yellow" />
            </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})