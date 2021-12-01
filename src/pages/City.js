import React, {useEffect, useState} from "react";
import { Card, Spin} from "antd";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {restoreCities} from "../redux/actions";

const City = (props) => {
    const {cities,restoreCities,city} = props
    const [currentCity,setCurrentCity] = useState()
    const [maxTemp,setMaxTemp] = useState()
    const {id} = useParams()

    useEffect(() => {
        const savedCities =  JSON.parse(localStorage.getItem('cities'))
       restoreCities(savedCities)
    },[])

    useEffect(() => {
        if(!currentCity){
            if(!city(+id)) return
            setCurrentCity(city(+id))
            const max = city(+id).weatherByHours.hourly.reduce((res,item) => {
                if(Math.round(item.temp) > res) {
                    res = Math.round(item.temp)
                }
                return res
            }, -99)
            setMaxTemp(max)
        }
    },[cities])

    if (!currentCity || !currentCity.weather){
        return <div className={'spinBlock'}><Spin /></div>
    }

    const calculateMargin = (temp) => {
        return (maxTemp - temp) * 5
    }

    return(
        <div className={'detailBlock'}>
            <h1 className={'h1'}>Hour Weather</h1>
            <div className={'hourBlock'}>
                {currentCity.weatherByHours.hourly.map(item => {
                    return (
                        <div className={'cardHour'} style={{marginTop: calculateMargin(Math.round(item.temp))}}>
                            {Math.round(item.temp) > 0 ? `+${Math.round(item.temp)}` : Math.round(item.temp)} °
                        </div>
                    )
                })}
            </div>
            <div className={'container'}>
                <div className={'cardDetail'}>
                    <div className="site-card-border-less-wrapper">
                        <Card className={'cityDetail'} title={currentCity.weather.name} bordered={false}>
                           <img src={`https://openweathermap.org/img/wn/${currentCity.weather.weather[0].icon}@2x.png`} alt={currentCity.weather.weather[0].id} />
                            <p>{currentCity.weather.weather[0].main}</p>
                            <p>Temperature: {currentCity.weather.main.temp} °</p>
                            <div className={'cityGroup'}>
                                <p>Temp min: {currentCity.weather.main.temp_min} °</p>
                                <p>Feels like: {currentCity.weather.main.feels_like} °</p>
                                <p>Humidity: {currentCity.weather.main.humidity} %</p>
                                <p>Temp max: {currentCity.weather.main.temp_max} °</p>
                                <p>Atmospheric pressure: {currentCity.weather.main.pressure } hPa</p>
                                <p>Wind speed: {currentCity.weather.wind.speed} meter/sec</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        city: (id) => {
            return state.cities.find(item => item.weather.id === id)
        },
        cities: state.cities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        restoreCities: (cities) => {
            dispatch(restoreCities(cities))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)