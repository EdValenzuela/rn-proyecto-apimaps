import { GET_CHECK_LOCATION_PERMISSIONS, GET_LOCATION_PERMISSIONS } from "../../types";


export default (state, action) => {
    switch (action.type) {
        case GET_LOCATION_PERMISSIONS:
        case GET_CHECK_LOCATION_PERMISSIONS:
            return{
                ...state,
                locationStatus: action.payload  
            }
    
        default:
            return state;
    }
}