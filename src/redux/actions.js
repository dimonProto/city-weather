import {
    ADD_CITY,
    ADD_WEATHER,
    DELETE_CITY,
    GET_WEATHER_BY_HOUR,
    RESTORE_CITIES
} from "./actionTypes";

export const addCity = (payload) => ({ type:ADD_CITY, payload })
export const deleteCity = (payload) => ({ type:DELETE_CITY, payload })
export const restoreCities = (payload) => ({ type:RESTORE_CITIES, payload })
export const addWeather = (payload) => ({ type:ADD_WEATHER, payload })
export const addWeatherByHour = (payload) => ({ type:GET_WEATHER_BY_HOUR, payload })