import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CardCountry = ({item}) => {

    const { name: { common, official }, cca2, capital, flags:{ png: uri } } = item;

    return (
        <>
        <View style={{alignItems:'center'}}>
            <View style={styles.container}>
                <View>
                    <View style={styles.card}><Text style={styles.txt}>Nombre : </Text><Text style={styles.txtSecond}>{common}</Text></View>
                    <View style={styles.card}><Text style={styles.txt}>Oficial : </Text><Text style={styles.txtSecond}>{official}</Text></View>
                    <View style={styles.card}><Text style={styles.txt}>Capital : </Text><Text style={styles.txtSecond}>{capital}</Text></View>
                    <View style={styles.card}><Text style={styles.txt}>Sigla : </Text><Text style={styles.txtSecond}>{cca2}</Text></View>
                </View>
                <Image 
                    style={{width: 70, height: 40}}
                    source={{uri}}
                />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '95%', 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent:'space-between', 
        alignItems:'center', 
        marginVertical: 5, 
        backgroundColor: '#ccc',
        padding: 15,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    card:{
        alignItems:'center',
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    txt:{
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    txtSecond:{
        fontSize: 14,
        color: 'red',
    }
})

export default CardCountry
