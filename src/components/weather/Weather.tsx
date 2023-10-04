// Components
import Info from "../info/Info";

// React Icons
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";

// Components and hooks
import SearchBar from "../searchbar/SearchBar";
import { useFetch } from "../../hook/useFetch";
import { RequestProps } from "../../types/request";
import { isRaining } from "./Sky";




export default function Weather() {
  const data = useFetch<RequestProps>()

  const temp = data?.main.temp as number

  console.log(typeof(data?.main.temp))
  return (
    <section className="flex flex-col items-center justify-center mx-auto gap-12">
      <SearchBar />
      <div className="flex flex-col items-center">
        <div className="text-8xl">
        {isRaining(data?.weather[0].description)}
        </div>
          <p className="text-xl">{data?.weather[0].description}</p>
          <p className="text-2xl font-bold">{`${Math.trunc(temp)} °C`}</p>
        <p>{data?.name}</p>
      </div>
      <div className="flex items-center justify-between gap-12">
        <Info icon={<WiHumidity />} name="Humidity" item={`${data?.main.humidity}%`} />
        <Info icon={<FiWind />} name="Wind Speed" item={`${data?.wind.speed} Km/h`} />
      </div>
    </section>
  );
}
