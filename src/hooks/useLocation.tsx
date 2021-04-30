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

    const _setPostionUser = ({ coords }:GeolocationResponse) => {
        setInitialPosition({
            latitude: coords.latitude,
            longitude: coords.longitude
        })
        setHasLocation(true);
    }

    useEffect(()=>{
        Geolocation.getCurrentPosition(
            info =>_setPostionUser(info),
            err => console.log(err),
            {
                enableHighAccuracy: true
            }
        );
    },[]);

    return {
        hasLocation,
        initialPosition,
    }
}
