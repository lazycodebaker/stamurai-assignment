import { Settings } from "@/config/setting";
import { CityDataType } from "@/types/data";
import { WeatherDataType, weatherDataTypeSchema } from "@/types/weather";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Weather: React.FC<CityDataType['coordinates']> = ({ lat, lon }) => {

    const api_key = Settings.openweather_api;
    const openweather_api = Settings.openweather_url
    const url = openweather_api + `?lat=${lat}&lon=${lon}&appid=${api_key}`

    const [weatherData, setWeatherData] = useState<WeatherDataType>();

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(url);
                const weatherData = weatherDataTypeSchema.parse(response.data);
                setWeatherData(weatherData);
            } catch (error) {
                console.log(error)
            }
        };
        fetchWeather()
    }, []);

    return (
        <main className="p-4">
            {weatherData && (
                <div className="bg-gray-200 p-4 rounded-md">
                    <h2 className="text-xl font-semibold mb-4">{weatherData.name}, {weatherData.sys.country}</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Weather</h3>
                            {weatherData.weather.map((weather, index) => (
                                <div key={index}>
                                    <p>{weather.main}: {weather.description}</p>
                                    <Image src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Main</h3>
                            <p>Temperature: {weatherData.main.temp}°C</p>
                            <p>Feels Like: {weatherData.main.feels_like}°C</p>
                            <p>Humidity: {weatherData.main.humidity}%</p>
                            <p>Pressure: {weatherData.main.pressure}hPa</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Wind</h3>
                        <p>Speed: {weatherData.wind.speed} m/s</p>
                        <p>Direction: {weatherData.wind.deg}°</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Visibility</h3>
                        <p>{weatherData.visibility} meters</p>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Weather;
