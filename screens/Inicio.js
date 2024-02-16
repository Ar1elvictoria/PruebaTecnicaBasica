import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../componentes/Header';
import Footer from '../componentes/footer';
import { useNavigation } from '@react-navigation/native';

const Inicio = () => {
    const navigation = useNavigation();

    const Click = () => {
        navigation.navigate('Series');
    }

    const Click2 = () => {
        navigation.navigate('Peliculas');
    }

    return (
        <View style={styles.container}>
            <Header />
            <TouchableOpacity onPress={Click2}>
                <Image
                    source={require('../material/placeholder.png')}
                    style={styles.Peliculas}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Text style={styles.text}>Popular Movies!</Text>
            <TouchableOpacity onPress={Click}>
                <Image
                    source={require('../material/placeholder.png')}
                    style={styles.Series}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Text style={styles.text}>Popular Series!</Text>
            <Footer />
        </View>
    );
}

export default Inicio;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Peliculas: {
        backgroundColor: 'rgb(30,30,30)',
        width: 180,
        height: 180,
        marginTop:30,
        
    },
    Series: {
        backgroundColor: 'rgb(30,30,30)',
        width: 180,
        height: 180,
        marginTop:30,
    },
    text: {
        fontFamily:'',
        fontSize:20,
    }
});
