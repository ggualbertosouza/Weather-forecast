// Axios | React
import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<T = unknown>() {
  const [data, setData] = useState<T | null>();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=dallas &lang=pt_br&units=metric&appid=3619dbc5a9c665df1cb3caa6808bc10e`
      )
      .then((response) => {
        setData(response.data);
      });
  }, [useFetch]);

  return data;
}
