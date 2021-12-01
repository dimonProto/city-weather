import {getHourWeatherRequest, getWeatherRequest} from "../api/api";
import {addWeather, addWeatherByHour} from "./actions";

export const getWeather = (params) => async (dispatch) => {
    try{
        const {data: weatherData} = await getWeatherRequest(params)
        const {data} = await getHourWeatherRequest({
            lat: weatherData.coord.lat,
            lon: weatherData.coord.lon,
        })

        dispatch(addWeather({
            ...params,
            weather: weatherData
        }))

        dispatch(addWeatherByHour({
            ...params,
            weatherByHours: data
        }))
    } catch (e){
        console.log(e)
    }
}
