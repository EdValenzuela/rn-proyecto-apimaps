import React, { useEffect, useRef } from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { useLocation } from '../../hooks/useLocation';
import LoadingScreen from '../../Screens/LoadingScreen';
import ButtonFab from '../../components/MapView/ButtonFab'

const mapMarker = [{
    
}]

const MapViewComp = () => {
    
    const { myLocationStatus, positionGps, getCurrentLocation } = useLocation();
    const { latitude, longitude } = positionGps;

    const mapViewRef = useRef();

    const getPositionJustify = async() => {
        const { latitude, longitude } = await getCurrentLocation();
        
        mapViewRef.current.animateCamera({
            center: {latitude, longitude}
        })
    }

    if(!myLocationStatus) return <LoadingScreen />

    return (
    <>
        <ButtonFab
            name='navigate-outline'
            onPress={ getPositionJustify }
            style={{
                position: 'absolute',
                right: 25,
                bottom: 25
            }}
        />
        <MapView
            ref={ (el) => mapViewRef.current = el}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation
            initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                coordinate={{
                    latitude: -33.5920303,
                    longitude: -70.70545044738465,
                }} 
                title={'Municipalidad'}
                description="Ilustre municipalidad de San Bdo"
            /> 
            <Marker
                coordinate={{
                    latitude: -33.4257845,
                    longitude: -70.6187814,
                }} 
                title={'Escalab'}
                description="Escalab academy"
            /> 
        </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapViewComp;
