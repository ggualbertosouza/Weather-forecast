// Axios | React
import axios from "axios";
import { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store";

export function useFetch<T = unknown>() {
  const local = useSelector((state: RootState) => state.city.city)
  const [data, setData] = useState<T | null>();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=pt_br&units=metric&appid=3619dbc5a9c665df1cb3caa6808bc10e`
      )
      .then((response) => {
        setData(response.data);
      });
  }, [local]);

  return data;
}
