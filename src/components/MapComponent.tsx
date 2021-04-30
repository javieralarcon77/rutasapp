import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';

interface Marcador{
    lat: number,
    lng: number,
    title: string,
    description?: string;
}

interface Props{
    markers?:Marcador[],
}

const MapComponent = ({ markers = [] }:Props) => {

    const { initialPosition, hasLocation } = useLocation();

    if(!hasLocation)
        return <LoadingScreen title="Obteniendo Coordenadas"/>

    return (
        <>
            <MapView
                style={{ flex: 1 }}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {/* marcadores dinamicos */}
                {
                    markers.map( (marker, index)=>{
                        return (
                            <Marker
                                image={ require('../assets/custom-marker.png') }
                                coordinate={ {
                                    latitude: marker.lat,
                                    longitude: marker.lng
                                } }
                                title={ marker.title }
                                description={ marker.description }
                            /> 
                        )
                    } )
                }
                {/**/}
            </MapView>
        </>
    )
}

export default MapComponent
