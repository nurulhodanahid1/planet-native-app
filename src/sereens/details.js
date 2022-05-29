import { View, StyleSheet, SafeAreaView, StatusBar, ScrollView, Pressable, Linking } from 'react-native'
import React from 'react'
import Text from '../componets/text/text'
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import PlanetHeader from '../componets/planet-header';

export default function Details({navigation, route}) {
    const planet = route.params.planet;
    console.log("planet>>", planet);
    const {name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink} = planet;

    const PlanetSection = ({title, value}) => {
        return(
            <View style={styles.planetSection}>
                <Text preset="small" style={{textTransform: "uppercase"}}>{title}</Text>
                <Text preset="h2">{value}</Text>
            </View>
        )
    }

    const onPressLink = () => {
        Linking.openURL(wikiLink);
    }

    return (
        <SafeAreaView style={[styles.container, { marginTop: StatusBar.currentHeight }]}>
            <PlanetHeader backButton={true}/>
            <ScrollView>
                <View style={styles.imageView}>
                    
                </View>
                <View style={styles.detailsView}>
                    <Text preset="h2" style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Pressable onPress={onPressLink} style={styles.source}>
                        <Text>Source: </Text>
                        <Text preset="h4" style={styles.wikipedia}>Wikipedia</Text>
                    </Pressable>
                </View>

                <View height={40}/>

                <PlanetSection title="Rotation Time" value={rotationTime} />
                <PlanetSection title="Revolution Time" value={revolutionTime} />
                <PlanetSection title="Radius" value={radius} />
                <PlanetSection title="Average Temp" value={avgTemp} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    imageView: {
        marginTop: spacing[8],
        alignItem: "center",
        justifyContent: "center",
    },
    detailsView: {
        marginTop: spacing[10],
        marginHorizontal: spacing[6],
        alignItems: "center",
    },
    name: {
        textTransform: "uppercase",
        textAlign: "center",
    },
    description: {
        marginTop: spacing[5],
        textAlign: "center",
        lineHeight: 21,
    },
    source: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: spacing[5],
    },
    wikipedia: {
        textDecorationLine: "underline",
        fontWeight: 'bold',
    },
    planetSection: {
        flexDirection: "row",
        alignItem: "center",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal : spacing[5],
        paddingVertical: spacing[4],
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4],
    }
});