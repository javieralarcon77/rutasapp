import React from 'react'
import { View, Text } from 'react-native'

const LoadingScreen = () => {
    return (
        <View style={{ 
            flex:1,
            justifyContent:'center',
            alignItems:'center',
         }}>
            <Text
                style={{
                    fontSize: 20,
                }}
            >Loading Screen</Text>
        </View>
    )
}

export default LoadingScreen
