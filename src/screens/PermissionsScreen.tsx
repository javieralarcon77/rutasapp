import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BlackButton from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext';

const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext( PermissionsContext );

    
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Es necesario el permiso del GPS para usar esta aplicacion</Text>
            <BlackButton
                title="Dar Permiso"
                onPress={ askLocationPermission }
            />
            <Text style={{ marginTop: 10 }}> { JSON.stringify( permissions, null, 5 ) } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        width: 250,
        fontSize: 18,
        textAlign:'center',
        marginBottom: 20,

    }
});

export default PermissionsScreen
