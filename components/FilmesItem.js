import React from "react";
import { View, Image, StyleSheet } from 'react-native';

export default function FilmesItem({ imageUrl}) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    image: {
        width: 150,
        height: 250,
    },
});