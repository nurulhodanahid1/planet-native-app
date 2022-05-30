import { View, StyleSheet, SafeAreaView, StatusBar, FlatList, Pressable, TextInput } from 'react-native';
import React, {useState} from 'react';
import Text from '../componets/text/text';
import PlanetHeader from '../componets/planet-header';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';  //for icons
import { useNavigation } from '@react-navigation/native';

const PlanetItem = ({ item }) => {       //{ name, color }
    const { name, color } = item;
    const navigation = useNavigation()
    return (
        <Pressable
            onPress={() => {
                navigation.navigate('Details', { planet: item })
            }}
            style={styles.items}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                <Text preset="h4" style={styles.itemsName}>{name}</Text>
            </View>
            <AntDesign name="right" size={16} color="white" />
        </Pressable>
    )
}

export default function Home({ navigation }) {
    const [list, setList] = useState(PLANET_LIST);
    const renderItem = ({ item }) => {
        // const { name, color } = item;
        return (
            <PlanetItem item={item} />         //name={name} color={color}
            // <Pressable
            //     onPress={() => {
            //         navigation.navigate('Details', { planet: item })
            //     }}
            //     style={styles.items}
            // >
            //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            //         <View style={[styles.circle, { backgroundColor: color }]} />
            //         <Text preset="h4" style={styles.itemsName}>{name}</Text>
            //     </View>
            //     <AntDesign name="right" size={16} color="white" />
            // </Pressable>
        )
    }
    const searchFilter = (text) => {
        const filteredList = PLANET_LIST.filter((item) => {
            const itemName = item.name.toLowerCase();
            const userTypedText = text.toLowerCase();
            return( itemName.indexOf(userTypedText) > -1)
        })
        setList(filteredList);
    }
    return (
        <SafeAreaView style={[styles.container, { marginTop: StatusBar.currentHeight }]}>
            <PlanetHeader />
            <TextInput
                placeholder="type the planet name..."
                placeholderTextColor={colors.white}
                autoCorrect={false}
                style={styles.searchInput}
                onChangeText={(text) => searchFilter(text)}
            />
            <FlatList
                contentContainerStyle={styles.list}
                data={list}  //PLANET_LIST
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                // renderItem={({ item }) => {
                //     const { name, color } = item;
                //     return (
                //         <Pressable
                //             onPress={() => {
                //                 navigation.navigate('Details', { planet: item })
                //             }}
                //             style={styles.items}
                //         >
                //             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                //                 <View style={[styles.circle, { backgroundColor: color }]} />
                //                 <Text preset="h4" style={styles.itemsName}>{name}</Text>
                //             </View>
                //             <AntDesign name="right" size={16} color="white" />
                //         </Pressable>
                //     )
                // }}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    list: {
        padding: spacing[5],
    },
    items: {
        padding: spacing[3],
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    itemsName: {
        textTransform: 'uppercase',
        marginLeft: spacing[3],
    },
    separator: {
        borderBottomWidth: 0.6,
        borderBottomColor: colors.white,
    },
    searchInput: {
        padding: spacing[4],
        color: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        margin: spacing[5],
    }
});