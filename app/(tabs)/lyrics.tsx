import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// i wanna add a parameter into this function to make the lyrics for a specific song show up;
// i also need the way the backend will be implemented to do this in an effective way tbh
export default function Lyrics(// ex: const song
    ) {
    return (
        <Text style={styles.textStyle}>song.lyrics</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 13,
        color: 'black',
        padding: 1
    }
})