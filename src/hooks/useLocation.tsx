import { useEffect, useRef, useState } from 'react'
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

interface Location{
    latitude:number,
    longitude:number,
}

export const useLocation = () => {
    
    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState<Location>({
        longitude: 0,
        latitude: 0,
    });

    const [userLocation, setUserLocation] = useState<Location>({
        longitude: 0,
        latitude: 0,
    });

    const watchId = useRef<number>();

    useEffect(()=>{
        getCurrenLocation()
            .then( location => {
                setInitialPosition(location)
                setHasLocation(true);
                setUserLocation( location );
            })
    },[]);

    const getCurrenLocation = () => {
        return new Promise<Location>((resolve, reject)=>{
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve( {
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    } );
                },
                err => reject( err ),
                {
                    enableHighAccuracy: true
                }
            );
        });
    }

    const followUserLocation = () => {
        
        watchId.current = Geolocation.watchPosition(
            ({ coords }) => {
                setUserLocation( {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                });
            },
            err => console.log( err ),
            {
                enableHighAccuracy: true,
                distanceFilter: 10,
            }
        );
    }    

    const stopFollowUser = () => {
        if(watchId.current)
            Geolocation.clearWatch( watchId.current );
    }

    return {
        hasLocation,
        initialPosition,
        userLocation,
        getCurrenLocation,
        followUserLocation,
        stopFollowUser,
    }
}
