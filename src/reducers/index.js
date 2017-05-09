import {combineReducers} from 'redux';
import WeatherRecude from './reducer_weather'

const rootReducer = combineReducers({weather: WeatherRecude});

export default rootReducer;
