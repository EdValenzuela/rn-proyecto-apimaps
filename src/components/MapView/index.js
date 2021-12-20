import React, { useRef } from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { useLocation } from '../../hooks/useLocation';
import LoadingScreen from '../../Screens/LoadingScreen';
import ButtonFab from '../../components/MapView/ButtonFab'
import { mapMarker } from '../../data';

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
                bottom: 100
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
            {
                mapMarker.map( ({latitude, longitude, title, description}, indice) => (
                    <Marker 
                        key={indice}
                        coordinate={{
                            latitude,
                            longitude,
                        }} 
                        title={title}
                        description={description}
                    />
                ))
            }
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
