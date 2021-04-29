import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const LoadingScreen = () => {
    return (
        <View style={{ 
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white',
         }}>
            <ActivityIndicator  
                size={ 50 }
                color={ 'black' }
            />
            <Text
                style={{
                    fontSize: 20,
                }}
            >Loading Screen</Text>
        </View>
    )
}

export default LoadingScreen
