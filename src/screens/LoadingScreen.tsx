import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

interface Props{
    title?:string;
}

const LoadingScreen = ({ title = "Cargando..." }:Props) => {
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
            >{ title }</Text>
        </View>
    )
}

export default LoadingScreen
