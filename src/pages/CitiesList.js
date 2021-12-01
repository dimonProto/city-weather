import React, {useEffect, useState} from "react";
import {Alert, Button, Card, Input} from "antd";
import 'antd/dist/antd.css';
import {addCity, deleteCity, restoreCities} from "../redux/actions";
import {connect} from "react-redux";
import { getWeather} from "../redux/thunk";
import {Link} from "react-router-dom";

const CitiesList = (props) => {
    const {cities,restoreCities,addCity,getWeather,deleteCity} = props
    const [cityName, setCityName] = useState('')
    const [country, setCountry] = useState('')
    const [error, setError] = useState('')


    useEffect(() => {
        const savedCities =  JSON.parse(localStorage.getItem('cities'))
        restoreCities(savedCities)
    },[])

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cities));
    },[cities])

    const handleAddCity = () => {
        const isExist = cities.find(city => city.name === cityName && city.country === country)
        if(isExist) {
            setError('Duplicated city')
            return
        } else {
            setError('')
        }
        const newCity = {name:cityName, country}
        addCity(newCity)
        getWeather(newCity)
        cleanForm()
    }

    const handleDeleteCity = (currentCity) => {
        deleteCity(currentCity)
    }

    const handleUpdateWeather = ({name,country}) => {
        getWeather({
            name,country
        })
    }

    const cleanForm = () => {
        setCityName('')
        setCountry('')
    }

    return(
        <div className={'container'}>
            {error.length > 0 && <Alert message={error} type="error" />}
            <h1 className={'h1'}>City Weather</h1>
           <div className={'addBlock'}>
               <Input
                   type="text"
                   placeholder='City Name'
                   value={cityName}
                   onChange={(e) => setCityName(e.target.value)}
               />
               <Input
                   type="text"
                   placeholder='Country'
                   value={country}
                   onChange={(e) => setCountry(e.target.value)}
               />
               <Button disabled={!cityName} type="primary" onClick={handleAddCity} >Add city</Button>
           </div>
            <div className={'cardList'}>
                {cities.map((city, idx )=> {
                    return(

                        <Card hoverable className={'cardBlock'} key={idx}>
                            <Link to={`/city/${city.weather?.id}`} className={'cardLink'}>
                                <p className={'cityName'}>
                                    {city.name}
                                    {city.country && `, ${city.country}`}
                                </p>
                                {
                                    city.weather && (
                                        <>
                                            <img src={`https://openweathermap.org/img/wn/${city.weather.weather[0].icon}@2x.png`} alt={city.weather.weather[0].id} />
                                            <p>{city.weather.main.temp} °</p>
                                            <div className={'tempBlock'}>
                                                <span>min: {city.weather.main.temp_min}</span>
                                                <span>max: {city.weather.main.temp_max}</span>
                                            </div>
                                            <p>{city.weather.weather[0].description}</p>
                                        </>
                                    )
                                }
                            </Link>
                            <div className={'btnGroup'}>
                                <Button type="primary" danger onClick={() => handleDeleteCity(city)}>Delete</Button>
                                <Button type="primary"  onClick={() => handleUpdateWeather(city)}>Update</Button>
                            </div>
                        </Card>
                    )
                })}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCity: (city) => {
            dispatch(addCity(city))
        },
        deleteCity: (city) => {
            dispatch(deleteCity(city))
        },
        restoreCities: (cities) => {
            dispatch(restoreCities(cities))
        },
        getWeather:(params) => {
            dispatch(getWeather(params))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CitiesList)