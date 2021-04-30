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

    const { 
        userLocation, 
        initialPosition, 
        hasLocation, 
        getCurrenLocation, 
        followUserLocation,
        stopFollowUser,
    } = useLocation();

    //tiene la referencia del mapview
    const mapRef = useRef<MapView>();

    //variable para saber si la camara sigue al usuario
    const following = useRef(true);

    useEffect(()=>{
        //inicia el seguimiento
        followUserLocation()
        return () => { //cancelar el seguimiento al desmontar el componente
            stopFollowUser();
        }
    },[])

    //mover el mapa a la nueva ubicacion
    useEffect(()=>{
        if( !following.current ) //si no se desea seguir se cancela la operacion
            return;

        mapRef.current?.animateCamera({
            center: userLocation,
        })
    },[ userLocation ])

    const centerPosition = async () => {
        const location = await getCurrenLocation();
       
        following.current = true;
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
                onTouchStart={ ()=>{ following.current = false; } }
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
