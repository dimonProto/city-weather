import {ADD_CITY, ADD_WEATHER, DELETE_CITY, GET_HOUR_WEATHER, GET_WEATHER_BY_HOUR, RESTORE_CITIES} from "./actionTypes";

let initialState = {
    cities: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }
        case DELETE_CITY:
            return {
                ...state,
                cities: state.cities.filter((city) => city.name !== action.payload.name || city.country !== action.payload.country)
            }
        case RESTORE_CITIES:{
            return {
                ...state,
                cities:[...action.payload]
            }
        }
        case ADD_WEATHER:{
            return {
                ...state,
                cities: state.cities.map(city => {
                    if(city.name === action.payload.name && city.country === action.payload.country){
                        city.weather = action.payload.weather
                    }
                    return city
                })
            }
        }
        case GET_WEATHER_BY_HOUR:
            return {
                ...state,
                cities:state.cities.map(city => {
                    if(city.name === action.payload.name && city.country === action.payload.country){
                        city.weatherByHours = action.payload.weatherByHours
                    }
                    return city
                })
            }
        default:
           return state
    }
}


export default reducer