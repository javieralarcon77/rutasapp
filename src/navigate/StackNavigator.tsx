import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import PermissionsScreen from '../screens/PermissionsScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:'white'
                }
            }}
        >
            <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator
