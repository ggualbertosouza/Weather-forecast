// Components
import SearchBar from "../searchbar/SearchBar";
import Weather from "../weather/Weather";

export default function Card() {
  return (
    <div className="flex flex-col items-center gap-12">
    <h1 className="text-white text-4xl ">Weather Forecast</h1>
    <div className="rounded-xl border shadow-lg shadow-white bg-gradient-to-tr from-violet-600 to-indigo-600"> 
      <div className="flex flex-col items-center justify-center gap-12 p-4 text-white">
        <Weather />
      </div>
    </div>
    </div>
  );
}
