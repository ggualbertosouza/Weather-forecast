// Components
import Info from "../info/Info";

// React Icons
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherPartlySunny } from "react-icons/ti";

// Components and hooks
import SearchBar from "../searchbar/SearchBar";
import { useFetch } from "../../hook/useFetch";
import { RequestProps } from "../../types/request";


export default function Weather() {
  const data = useFetch<RequestProps>()
    
  return (
    <section className="flex flex-col items-center justify-center mx-auto gap-12">
      <SearchBar />
      <div className="flex flex-col items-center">
        <div className="text-8xl">
          <TiWeatherPartlySunny />
        </div>
          <p className="text-2xl font-bold">{`${data?.main.temp} °C`}</p>
        <p>{data?.name}</p>
      </div>
      <div className="flex items-center justify-between gap-12">
        <Info icon={<WiHumidity />} name="Humidity" item={`${data?.main.humidity}%`} />
        <Info icon={<FiWind />} name="Wind Speed" item={`${data?.wind.speed} Km/h`} />
      </div>
    </section>
  );
}
