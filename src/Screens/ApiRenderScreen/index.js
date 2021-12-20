import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CardCountry from '../../components/cardCountry';
import { useFetch } from '../../hooks/useFetch'
import LoadingScreen from '../LoadingScreen';

const ApiRenderScreen = () => {

    const { isFetching, dataFetch } = useFetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,cca2,flags');

    return (
        <>
            <Text style={{fontWeight: 'bold', fontSize: 24, color: 'black', alignSelf: 'center', marginVertical: 15}}>Countries</Text>
            <View style={{marginBottom: 120, marginTop:15}}>
                <ScrollView>
                    {
                        isFetching ? <LoadingScreen /> 
                        : dataFetch.map( (item, i) => (
                            <CardCountry key={i} item={item} />
                        ))
                    }
                </ScrollView>
            </View>
        </>
    )
}

export default ApiRenderScreen
