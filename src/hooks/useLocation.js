import { useEffect, useRef, useState } from "react";
import Geolocation from '@react-native-community/geolocation';

export const useLocation = () => {

    const [myLocationStatus, setMyLocationStatus] = useState(false);
    const [positionGps, setPositionGps] = useState({
        latitude : 0,
        longitude : 0
    });

    const isMountedComp = useRef(true);

    useEffect(() => {
        isMountedComp.current = true;
        return () => {
            isMountedComp.current = false;
        }
    }, [])

    useEffect(() => {
        getCurrentLocation()
        .then( location => {
                if(!isMountedComp.current) return;
                setPositionGps(location);
                setMyLocationStatus(true);
            });
    }, []);

    const getCurrentLocation = () => {
        return new Promise( (resolve, reject) =>{
            Geolocation.getCurrentPosition(
                ({coords}) => {
    
                    resolve({
                        latitude : coords.latitude,
                        longitude : coords.longitude
                    });
                }, // OK
                (err) => reject({err}), // Error
                { enableHighAccuracy:true, timeout:20000, maximumAge: 1000 } //Opciones
            ) ;
        })
    }

    return {
        myLocationStatus,
        positionGps,
        getCurrentLocation
    }
}