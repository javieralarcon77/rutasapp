import { useEffect, useState } from 'react'
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

    const _setPostionUser = ({ latitude, longitude }:Location) => {
        setInitialPosition({
            latitude: latitude,
            longitude: longitude
        })
        setHasLocation(true);
    }

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

    useEffect(()=>{
        getCurrenLocation()
            .then( location => {
                _setPostionUser( location );
            })
    },[]);

    return {
        hasLocation,
        initialPosition,
        getCurrenLocation,
    }
}
