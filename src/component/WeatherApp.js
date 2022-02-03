import './WeatherApp.scss'

function WeatherApp({ cityArr }) {
    
    let data = cityArr.list;

    return (
        <div className='weather-hourly'>
            {data && data.map((value) => {
                return (
                    <div className='hourly' key={value.dt_txt}>
                        <h1>{cityArr.city.name} </h1>
                        <h2>{value.dt_txt.substring(11,16)}</h2>
                        <p>{Math.floor(value.main.temp - 273.15)} °C</p>
                        <p><img src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`} alt="" />
                            <span>{ value.weather[0].main}</span></p>
                </div>)
            })}
            
        </div>
    )
}

export default WeatherApp
