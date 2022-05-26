import { View, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Text from './text/text';
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PlanetHeader({ backButton, title="The Planets" }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text preset="h2">{title}</Text>
            {backButton && <Pressable onPress={() => {
                navigation.goBack();
            }}>
                <AntDesign name="left" size={16} color="white" />
            </Pressable>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: 0.4,
        borderBottomColor: colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});