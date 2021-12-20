import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const LoadingScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator 
                size={50}
                color='red'
            />
        </View>
    )
}

export default LoadingScreen
