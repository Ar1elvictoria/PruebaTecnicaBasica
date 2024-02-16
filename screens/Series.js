import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Header from '../componentes/Header';
import { useSelector, useDispatch } from 'react-redux';
import { watchSeries } from '../Redux/reducers/media'; 

const Series = () => {
    const dispatch = useDispatch();
    const series = useSelector(state => state.media.series); 

    React.useEffect(() => {
        dispatch(watchSeries()); 
    }, [dispatch]); 
    
    //console.log(series);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image
                style={styles.posterImage}
                source={{ uri: item.images['Poster Art'].url }}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.container2}>SERIES!</Text>
            <FlatList
                data={series}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 130,
    },
    container2: {
        backgroundColor: '#8E8E8E',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    posterImage: {
        width: 80,
        height: 120,
        marginRight: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        fontSize: 14,
    },
});

export default Series;