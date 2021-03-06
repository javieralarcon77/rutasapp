import React, { createContext, useEffect, useState } from 'react'
import { AppState, AppStateStatus, Platform } from 'react-native'
import { check, request, PermissionStatus, PERMISSIONS, openSettings } from 'react-native-permissions'

//propiedades que expone
export interface PermissionsState{
    locationStatus:PermissionStatus
}

//estado inicial
export const permissionInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionsState,
    askLocationPermission: () => void,
    checkLocationPermission: () => void,
}

//Todo que exporta
export const PermissionsContext = createContext({} as PermissionsContextProps)


export const PermissionsProvider = ({children}:any) => {

    const [permissions, setPermissions] = useState(permissionInitState)

    const _eventCheckState = (state:AppStateStatus) => {
        if( state !== 'active' ) return;
        
        checkLocationPermission();
    }

    useEffect(() => {
        _eventCheckState('active');
        AppState.addEventListener('change', _eventCheckState)
        return () => {
            //AppState.removeEventListener('change',_eventCheckState)
        }
    }, [])

    const askLocationPermission = async () => {
        let permisionStatus:PermissionStatus;

        if(Platform.OS === 'ios'){
            permisionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );

        }else{
            permisionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );
        }

        if( permisionStatus === 'blocked' ){
            openSettings();
        }


        setPermissions({
            ...permissions,
            locationStatus: permisionStatus
        })
    }
    const checkLocationPermission = async () => {
        let permisionStatus:PermissionStatus;

        if(Platform.OS === 'ios'){
            permisionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );

        }else{
            permisionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );
        }
        setPermissions({
            ...permissions,
            locationStatus: permisionStatus
        })
    }

    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission,
        }}>
            { children }
        </PermissionsContext.Provider>
    )
}