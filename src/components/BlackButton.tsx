import React from 'react'
import { View, Text, TouchableOpacity, StyleProp, ViewStyle, StyleSheet } from 'react-native'

interface Props{
    title: string,
    onPress: () => void,
    style?:StyleProp<ViewStyle>
}

const BlackButton = ({ title, onPress, style = {} }:Props) => {
    return (
        <TouchableOpacity 
            activeOpacity={ 0.9 }
            onPress={ onPress }
            style={{
                ...styles.blackButton,
                ...style as any,
            }}
        >
            <Text style={ styles.textButton }>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    blackButton:{
        marginVertical: 10,
        height: 45,
        width: 200,
        backgroundColor:'black',
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        elevation: 6,
    },
    textButton:{
        color: 'white',
        fontSize: 18,
    }
});

export default BlackButton
