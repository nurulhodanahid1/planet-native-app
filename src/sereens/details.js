import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Text from '../componets/text/text'
import { colors } from '../theme/colors';
import PlanetHeader from '../componets/planet-header';

export default function Details() {
    return (
        <SafeAreaView style={[styles.container, { marginTop: StatusBar.currentHeight }]}>
            <PlanetHeader backButton={true}/>
            <Text>Details</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
});