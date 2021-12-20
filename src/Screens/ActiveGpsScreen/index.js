import React, { useContext, useEffect } from 'react'
import { ActiveGpsContext } from '../../context/ActiveGps/ActiveGpsContext'

import { View, Text } from 'react-native'

const ActiveGpsScreen = ({navigation}) => {

    const { locationStatus, questionLocation } = useContext(ActiveGpsContext);

    useEffect(() => {
        navigation.setOptions({
            title: `Permisos (${locationStatus})`,
        });
    }, []);

    useEffect(() => {
        questionLocation()
    }, [])

    return (
        <View style={{
            flex: 1,
            justifyContent:'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'black',
                fontSize: 16
            }}>Debe tener los permisos habilitados del GPS</Text>
            <Text style={{
                fontWeight: 'bold',
                color: 'red',
                fontSize: 20
            }}>
                {locationStatus}
            </Text>
        </View>
    )
}

export default ActiveGpsScreen
