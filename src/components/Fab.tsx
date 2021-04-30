import React from 'react'
import { View, TouchableOpacity, StyleProp, ViewStyle, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

interface Props{
    iconName:string,
    onPress:() => void,
    style?:StyleProp<ViewStyle>,
}

const Fab = ({ iconName, onPress, style = {}}:Props) => {
    return (
        <View style={{ 
            ...style as any,
            
         }}>
            <TouchableOpacity 
                activeOpacity={ 0.9 }
                onPress={ onPress }
                style={ styles.blackButton }
            >
                <Icon 
                    name={ iconName }
                    size={ 30 }
                    color="white"
                    style={{ left: 1 }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    blackButton:{
        zIndex:9999,
        width: 50,
        height: 50,
        backgroundColor:'black',
        borderRadius: 100,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});

export default Fab
