import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';

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

    const { initialPosition, hasLocation, getCurrenLocation } = useLocation();
    const mapRef = useRef<MapView>();

    const centerPosition = async () => {

        const location = await getCurrenLocation();

        mapRef.current?.animateCamera({
            center: location
        })
    }

    if(!hasLocation)
        return <LoadingScreen title="Obteniendo Coordenadas"/>

    return (
        <>
            <MapView
                ref={ (el)=> mapRef.current = el! }
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
            <Fab
                iconName="compass-outline"
                onPress={ ()=> centerPosition() }
                style={{
                    position:'absolute',
                    bottom: 10,
                    right:10,
                }}
            />
        </>
    )
}

export default MapComponent
