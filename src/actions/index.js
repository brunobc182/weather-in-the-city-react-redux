const API_KEY = '9b0fadf57f55ccb49d836e47609e5713';
const ROOT_URL = `api.openweathermap.org/data/2.5/weather?=appid${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
    return {
        type: FETCH_WEATHER, 
    }
}