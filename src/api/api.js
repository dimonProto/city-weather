import * as axios from 'axios'
const API_KEY = 'b9898eab2d007d76ad60232f74562835'


export const getWeatherRequest = async ({name,country}) => {
    return  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name},${country}&appid=${API_KEY}&units=metric`)
}

export const getHourWeatherRequest = async ({lat, lon}) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${API_KEY}&units=metric`)
}