// React icons
import { TiWeatherPartlySunny, TiWeatherShower, TiWeatherCloudy, TiWeatherSunny } from "react-icons/ti";

export function isRaining(weather: string | null | undefined) {
    switch(weather){
        case 'céu limpo':
            return <TiWeatherSunny />
            break
        case 'chuva moderada':
            return <TiWeatherShower />
            break
        case 'nuvens dispersas':
            return <TiWeatherCloudy />
            break
        case 'algumas nuvens':
            return <TiWeatherCloudy />
            break
        case 'nublado':
            return <TiWeatherCloudy />
            break
        default:
            return <TiWeatherPartlySunny />
            break
    }
  }

