import React, { useEffect, useReducer } from 'react'
import { Platform, AppState } from 'react-native';

import { PERMISSIONS, request, check, openSettings } from 'react-native-permissions'

import { ActiveGpsContext } from './ActiveGpsContext'
import reducer from './ActiveGpsReducer';
import { GET_CHECK_LOCATION_PERMISSIONS, GET_LOCATION_PERMISSIONS } from '../../types';

const initialState = {
    locationStatus: 'unavailable'
}

const ActiveGpsProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        validatePermission();
        AppState.addEventListener('change', state => {
            if(state !== 'active') return;

            validatePermission();
        })
    }, []);

    const questionLocation = async() => {
        let activePermission;

        if(Platform.OS === 'android') activePermission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        
        if(activePermission === 'blocked') openSettings();
        
        dispatch({
            type: GET_LOCATION_PERMISSIONS,
            payload: activePermission
        });
    }

    const validatePermission = async() => {
        let activePermission;

        if(Platform.OS === 'android') activePermission = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        
        dispatch({
            type: GET_CHECK_LOCATION_PERMISSIONS,
            payload: activePermission
        });
    }

    return (
        <ActiveGpsContext.Provider value={{
            ...state,
            questionLocation,
            validatePermission
        }}>
            {children}
        </ActiveGpsContext.Provider>
    )
}

export default ActiveGpsProvider
